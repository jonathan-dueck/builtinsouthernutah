import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PersonDetailForm from '../../components/people/person-detail-form';
import PersonDetail from '../../components/people/person-detail.component';
import { UserContext } from '../../App';

import { db } from '../../config/Firebase';

class PersonDetailPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			person: {}
		}
		this.toggleState = this.toggleState.bind(this);
	}

	componentDidMount() {
		// Fetch this user from the backend, getting user id from address bar
		db.collection('profiles').where("id", "==", this.props.match.params.id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.data()
					this.setState({ person: doc.data() });
				})
			})
	}

	toggleState(editMode, permission) {
		const profileWeAreVisiting = this.props.match.params.id;
		const profileIdOfCurrentUser = localStorage.getItem('BuiltInSouthernUtah');
		const ownProfile = Boolean(profileWeAreVisiting === profileIdOfCurrentUser);
		if (ownProfile || Number(permission) === 3) {
			this.setState({ editMode });
		} else {
			console.log("Must be admin or own this profile, in order to edit it.");
			this.setState({ editMode: false })
		}
	}

	render() {
		const { hasProfile, title, displayName, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.state.person;
		const { editMode } = this.state;
		const id = this.props.match.params.id;
		return (
			<Fragment>

				{editMode || (!hasProfile) ?

					<UserContext.Consumer>
						{user => (
							<PersonDetailForm
								id={id}
								title={title}
								displayName={displayName}
								headshotSrc={headshotSrc}
								description={description}
								editMode={this.toggleState}
								permission={user.permission}
								profileVisible={profileVisible}
								facebook={facebook}
								twitter={twitter}
								linkedin={linkedin}
								github={github}
								portfolio={portfolio}
							/>
						)}
					</UserContext.Consumer>

					:

					<UserContext.Consumer>
						{user => (
							<PersonDetail
								id={id}
								title={title}
								displayName={displayName}
								headshotSrc={headshotSrc}
								description={description}
								editMode={this.toggleState}
								permission={user.permission}
								profileVisible={profileVisible}
								facebook={facebook}
								twitter={twitter}
								linkedin={linkedin}
								github={github}
								portfolio={portfolio}
							/>
						)}

					</UserContext.Consumer>
				}


			</Fragment>
		);
	}
}

export default withRouter(PersonDetailPage);
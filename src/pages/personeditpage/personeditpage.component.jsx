import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PersonDetailForm from '../../components/people/person-detail-form';
import PersonDetail from '../../components/people/person-detail.component';
import { UserContext } from '../../App';

import { db } from '../../config/Firebase';
import Loader from '../../components/loader/loader.component';


class PersonDetailPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			person: {},
			isLoading: false
		}
		this.toggleState = this.toggleState.bind(this);
		this.refetchProfile = this.refetchProfile.bind(this);
	}

	componentDidMount() {
		// Fetch this user from the backend, getting user id from address bar
		this.setState({ isLoading: true })
		db.collection('profiles').where("id", "==", this.props.match.params.id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.data()
					this.setState({ person: doc.data(), isLoading: false });
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

	refetchProfile(id) {
		this.setState({ loading: true });
		db.collection('profiles').where("id", "==", this.props.match.params.id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.data()
					this.setState({ person: doc.data(), isLoading: false });
				})
			})
	}

	render() {
		if (this.state.isLoading === true) return <Loader />
		const { hasProfile, title, displayName, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.state.person;
		const { editMode } = this.state;
		const id = this.props.match.params.id;
		return (
			<Fragment>
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
							refetchProfile={this.refetchProfile}
						/>
					)}
				</UserContext.Consumer>
				}
			</Fragment>
		);
	}
}

export default withRouter(PersonDetailPage);
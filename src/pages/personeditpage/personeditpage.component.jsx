import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PersonDetailForm from '../../components/people/person-detail-form';
import { UserContext } from '../../App';

import { db } from '../../config/Firebase';
import Loader from '../../components/loader/loader.component';


class PersonDetailPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			person: {},
			isLoading: false
		}
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
		const { title, displayName, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.state.person;
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
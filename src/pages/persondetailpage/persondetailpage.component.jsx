import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PersonDetailForm from '../../components/people/person-detail-form';
import PersonDetail from '../../components/people/person-detail.component';

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

	toggleState(editMode) {
		this.setState({ editMode });
	}

	render() {
		const { title, displayName, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.state.person;
		const { editMode } = this.state;
		const id = this.props.match.params.id;
		return (
			<Fragment>
				{editMode ?
					<PersonDetailForm
						id={id}
						title={title}
						displayName={displayName}
						headshotSrc={headshotSrc}
						description={description}
						editMode={this.toggleState}
						permission={3}
						profileVisible={profileVisible}
						facebook={facebook}
						twitter={twitter}
						linkedin={linkedin}
						github={github}
						portfolio={portfolio}

					/>
					:
					<PersonDetail
						id={id}
						title={title}
						displayName={displayName}
						headshotSrc={headshotSrc}
						description={description}
						editMode={this.toggleState}
						permission={3}
						profileVisible={profileVisible}
						facebook={facebook}
						twitter={twitter}
						linkedin={linkedin}
						github={github}
						portfolio={portfolio}
					/>}
			</Fragment>
		);
	}
}

export default withRouter(PersonDetailPage);
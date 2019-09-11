import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PersonDetailStyles from './person-detail.styles';
import Button from '../../globalstyles/button';
import { db } from '../../config/Firebase';
import { UserContext } from '../../App';

class PersonDetail extends React.Component {

	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
		this.canEditDelete = this.canEditDelete.bind(this);
	}

	canEditDelete(profileId, permission) {
		const userId = localStorage.getItem("BuiltInSouthernUtah");
		if (permission === 3 || profileId === userId) {
			return true
		} else {
			return false
		}
	}

	handleDelete() {
		const { id } = this.props;
		const loggedInUser = localStorage.getItem('BuiltInSouthernUtah');
		const profileIdWeAreVisiting = id;

		if (id && (loggedInUser === profileIdWeAreVisiting)) {
			db.collection('profiles').doc(id).delete().then((result) => {
				console.log("RESULT after delete: ", result);
				db.collection('profiles').doc(result.user.uid).set({
					id: result.user.uid,
					hasProfile: false,
					profileVisible: false
				})
				this.props.history.push('/people');
				console.log("Profile has been deleted.");
			})
				.catch((err) => {
					console.log(err);
				})
		} else {
			console.log("You don't have permission to delete that.")
		}
	}

	render() {
		const { displayName, title, editMode, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.props;

		return (
			<PersonDetailStyles>

				<div className="person-detail-left">

					<div className="user-image-box">
						<img className="user-image" alt={displayName} src={headshotSrc} />
					</div>


					<UserContext.Consumer>
						{user => {
							if (user.id === this.props.id || user.permission >= 2) {
								return <p>Profile is {profileVisible ? "" : " not "} publicly visible.</p>
							}
						}}
					</UserContext.Consumer>


					<div className="social-links">
						{facebook && (
							<div>
								<span className="social-logo">
									<a target="new" href={facebook}>
										<img alt="Facebook" src="../../images/facebook-icon.png" />
									</a>
								</span>
							</div>
						)}
						{twitter && (
							<div>
								<span className="social-logo">
									<a target="new" href={twitter}>
										<img alt="Twitter" src="../../images/twitter-icon.png" />
									</a>
								</span>
							</div>
						)}
						{linkedin && (
							<div>
								<span className="social-logo">
									<a target="new" href={linkedin}>
										<img alt="Linked In" src="../../images/linkedin-icon.png" />
									</a>
								</span>
							</div>
						)}
						{github && (
							<div>
								<span className="social-logo">
									<a target="new" href={github}>
										<img alt="GitHub" src="../../images/github-icon.png" />
									</a>
								</span>
							</div>
						)}
						{portfolio && (
							<div>
								<span className="social-logo">
									<a target="new" href={portfolio}>
										<img alt="Portfolio" src="../../images/www-icon.png" />
									</a>
								</span>
							</div>
						)}
					</div>
				</div>

				<div className="person-detail-right">
					<span className="person-detail-buttons">

						{this.canEditDelete(this.props.id, this.props.permission) && (
							<Fragment>

								<Button
									className="edit-profile"
									onClick={() => editMode(true, this.props.permission)}
								>
									Edit Profile
					</Button>

								<Button
									className="delete-profile"
									onClick={this.handleDelete}
								>
									Delete Profile
					</Button>
							</Fragment>
						)}




					</span>

					<div className="user-info-column">
						<h1 className="user-name">{displayName}</h1>
						<h3 className="user-title">{title}</h3>
						<div className="user-description">{ReactHtmlParser(description)}</div>
					</div>

				</div>
			</PersonDetailStyles>
		)
	}
}

export default PersonDetail;

import React from 'react';
import PersonDetailStyles from './person-detail.styles';
import Button from '../../globalstyles/button';
import { db } from '../../config/Firebase';

class PersonDetail extends React.Component {

	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		console.log("Delete This Profile");
		const { id } = this.props;
		console.log(`We are deleting user ${id}.`)

		if (id) {
			db.collection('profiles').doc(id).delete().then(() => {
				console.log("Profile has been deleted.");
			})
				.catch((err) => {
					console.log(err);
				})
		} else {
			console.log("User not found by id.")
		}
	}

	render() {
		const { displayName, title, editMode, headshotSrc, description, profileVisible, facebook, twitter, linkedin, github, portfolio } = this.props;

		return (
			<PersonDetailStyles>

				<div className="person-detail-left">

					<div className="user-image">
						<img className="user-image" alt={displayName} src={headshotSrc} />
					</div>
					{/* <p>{profileVisible ? "Yes" : "No"}</p> */}

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
					<span
						className="delete-profile"
						onClick={this.handleDelete}
					>
						Delete Profile
					</span>

					<div className="user-info-column">
						<h1 className="user-name">{displayName}</h1>
						<h3 className="user-title">{title}</h3>
						<p className="user-description">{description}</p>
					</div>
					<Button onClick={() => editMode(true)}>Edit Profile</Button>

				</div>
			</PersonDetailStyles>
		)
	}
}

export default PersonDetail;

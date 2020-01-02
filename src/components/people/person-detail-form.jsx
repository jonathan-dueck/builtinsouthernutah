import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { PersonDetailFormStyles, QuillStyles } from './person-detail-form.styles';
import Button from '../../globalstyles/button';
import { db } from '../../config/Firebase';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
// import { authLevels } from '../../utils/auth-levels';

function PersonDetailForm(props) {


	const [permission, setPermission] = useState(props.permission)
	const [profileVisible, setProfileVisible] = useState(props.profileVisible)
	const [displayName, setDisplayName] = useState(props.displayName)
	const [title, setTitle] = useState(props.title)
	const [description, setDescription] = useState(props.description)
	const [headshotSrc, setHeadshotSrc] = useState(props.headshotSrc)
	const [facebook, setFacebook] = useState(props.facebook || "")
	const [twitter, setTwitter] = useState(props.twitter || "")
	const [github, setGithub] = useState(props.github || "")
	const [portfolio, setPortfolio] = useState(props.portfolio || "")
	const [selectedFile, setSelectedFile] = useState(null)
	const [selectedFilename, setSelectedFilename] = useState(null)
	const [hasProfile, setHasProfile] = useState(props.hasProfile)

	// Define Methods

	// TODO: canEditDelete()
	// TODO: setProfileVisibility()
	// TODO: fileUploadHandler()

	const fileSelectedHandler = event => {
		setSelectedFile(event.target.files[0]);
		setSelectedFilename(event.target.files[0].name)
	}

	const { id } = props;
	const handleSubmit = (e) => {
		e.preventDefault();

		if (permission === 3 || (id === localStorage.getItem("BuiltInSouthernUtah"))) {
			db.collection('profiles').doc(id).set({
				id,
				displayName,
				title,
				description: description || "",
				headshotSrc: headshotSrc || '/images/person-silhouette.png',
				facebook: facebook || null,
				twitter: twitter || null,
				github: github || null,
				portfolio: portfolio || null,
				permission: permission || 0,
				profileVisible: profileVisible,
				hasProfile: true
			})
				.then(() => {
					// refetchProfile(id)
					props.history.push('/');
				})
				.catch((error) => {
					console.error("Error saving document", error);
				})
		}
	}

	// TODO: Define useEffect (uploading photo to firebase)

	return (
		<PersonDetailFormStyles>
			<p className="user-profile-visible">Your profile is currently <strong>{props.profileVisible ? "visible." : "invisible."}</strong></p>

			<label htmlFor="visible">Profile visible to others? </label>
			<input
				type="checkbox"
				name="visible"
				checked={profileVisible ? true : false}
				onChange={e => setProfileVisible(e.target.value)}
			/>

			<form encType="multipart/form-data">
				<div className="user-profile-image">
					<img alt={displayName} src={headshotSrc} />
					<span className="upload-buttons">
						<label htmlFor="file-upload" className="custom-file-upload">
							Select profile pic
 						</label>
						<input id="file-upload" className="button" type="file" name="file-upload" onChange={setSelectedFilename} />
						<Button>Upload</Button>
						<div>{selectedFilename}</div>
					</span>
				</div>
				<div className="form-row">
					<span className="form-label">Name</span>
					<input
						type="text"
						name="displayName"
						placeholder="Publicly Visible Name"
						value={displayName || ""}
						onChange={e => setDisplayName(e.target.value)}
						className="form-element"
					/>
					<span className="form-required">*</span>
				</div>

				<div className="form-row">
					<span className="form-label">Title</span>
					<input
						type="text"
						name="title"
						placeholder="Profile Title, ie: 'Front-end Dev'"
						value={title || ""}
						onChange={e => setTitle(e.target.value)}
						className="form-element"
					/>
					<span className="form-required">*</span>
				</div>

				<div className="form-row">
					<span><img className="form-label-img" src="../images/twitter-icon.png" alt="Twitter" /></span>
					<input
						type="text"
						name="twitter"
						placeholder="Twitter Profile URL"
						value={twitter || ""}
						onChange={e => setTwitter(e.target.value)}
						className="form-element"
					/>
				</div>
				<div className="form-row">
					<span><img className="form-label-img" src="../images/github-icon.png" alt="Github" /></span>
					<input
						type="text"
						name="github"
						placeholder="GitHub URL"
						value={github || ""}
						onChange={e => setGithub(e.target.value)}
						className="form-element"
					/>
				</div>
				<div className="form-row">
					<span><img className="form-label-img" src="../images/facebook-icon.png" alt="Facebook" /></span>
					<input
						type="text"
						name="facebook"
						placeholder="Facebook URL"
						value={facebook || ""}
						onChange={e => setFacebook(e.target.value)}
						className="form-element"
					/>
				</div>
				<div className="form-row">
					<span><img className="form-label-img" src="../images/www-icon.png" alt="Portfolio" /></span>
					<input
						type="text"
						name="portfolio"
						placeholder="Your Portfolio URL"
						value={portfolio || ""}
						onChange={e => setPortfolio(e.target.value)}
						className="form-element"
					/>
				</div>
				<label htmlFor="description">Tell the world about yourself!</label>

				<QuillStyles>
					<ReactQuill
						name="description"
						value={description || ""}
						onChange={text => setDescription(text)}
						theme="snow"
					/>
				</QuillStyles>
			</form>
			<div className="button-row">
				<Button onClick={handleSubmit}>Save</Button>
				<Button onClick={() => props.history.push("/")}>Cancel</Button>
			</div>

		</PersonDetailFormStyles>
	)
}

// 	TODO: canEditDelete(profileId, permission) {
// 		const userId = localStorage.getItem("BuiltInSouthernUtah");
// 		if (permission === 3 || profileId === userId) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}

// 	TODO setProfileVisibility() {
// 		if (this.state.profileVisible === true) {
// 			this.setState({ profileVisible: false })
// 		} else {
// 			this.setState({ profileVisible: true })
// 		}
// 	}


// 	}

// 	//TODO fileUploadHandler() {
// 		const { selectedFile } = this.state;
// 		console.log({ selectedFile });

// 		if (selectedFile) {
// 			const headers = {
// 				'Content-Type': 'application/json',
// 			}
// 			console.log("File has been selected.");
// 			// axios.post('https://us-central1-built-in-southern-utah.cloudfunctions.net/uploadFile', selectedFile)
// 			axios({
// 				method: 'post',
// 				url: 'https://us-central1-built-in-southern-utah.cloudfunctions.net/uploadFile/',
// 				data: selectedFile,
// 				headers

// 			})
// 				.then((response) => {
// 					console.log("I think it effing worked...");
// 					console.log(response)
// 				})
// 				.catch((err) => {
// 					console.log("axios.post() did not succeed.")
// 				});
// 		} else {
// 			console.log("No file stored in local component state.")
// 		}
// 	}
// }

export default withRouter(PersonDetailForm);
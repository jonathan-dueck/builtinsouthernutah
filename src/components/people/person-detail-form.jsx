import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { PersonDetailFormStyles, QuillStyles } from './person-detail-form.styles';
import Button from '../../globalstyles/button';
import { authLevels } from '../../utils/auth-levels';
import { db } from '../../config/Firebase';

class PersonDetailForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			permission: this.props.permission,
			profileVisible: this.props.profileVisible,
			displayName: this.props.displayName,
			title: this.props.title,
			description: this.props.description,
			headshotSrc: this.props.headshotSrc,
			twitter: this.props.twitter || "",
			github: this.props.github || "",
			facebook: this.props.facebook || "",
			portfolio: this.props.portfolio || "",
			selectedFile: null,
			selectedFilename: null
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleQuillChange = this.handleQuillChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
		this.fileUploadHandler = this.fileUploadHandler.bind(this);
		this.canEditDelete = this.canEditDelete.bind(this);
		this.setProfileVisibility = this.setProfileVisibility.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleQuillChange(value) {
		this.setState({ description: value })
	}

	canEditDelete(profileId, permission) {
		const userId = localStorage.getItem("BuiltInSouthernUtah");
		if (permission === 3 || profileId === userId) {
			return true
		} else {
			return false
		}
	}

	setProfileVisibility() {
		this.setState({ profileVisible: !this.props.profileVisible });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { permission, profileVisible, displayName, title, description, headshotSrc, twitter, github, facebook, portfolio } = this.state;
		const { id, editMode } = this.props;
		console.log({ displayName });

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
				profileVisible: profileVisible
			})
				.then(() => {
					editMode(false, 3);
				})
				.catch((error) => {
					console.error("Error saving document", error);
				})
		}
	}

	fileSelectedHandler(event) {
		this.setState({ selectedFile: event.target.files[0], selectedFilename: event.target.files[0].name });
	}

	fileUploadHandler() {
		const { selectedFile } = this.state;
		console.log({ selectedFile });

		if (selectedFile) {
			console.log("File has been selected.");
			// axios.post('https://us-central1-built-in-southern-utah.cloudfunctions.net/uploadFile', selectedFile)
			axios({
				method: 'post',
				url: 'https://us-central1-built-in-southern-utah.cloudfunctions.net/uploadFile',
				data: selectedFile
			})
				.then((response) => {
					console.log("I think it effing worked...");
					console.log(response)
				})
				.catch((err) => {
					console.log("axios.post() did not succeed.")
					console.log(err.request)
					console.log(err);
				});
		} else {
			console.log("No file stored in local component state.")
		}
	}

	render() {
		const { editMode } = this.props;
		return (
			<PersonDetailFormStyles>
				<p className="user-auth-level">Authorization Level: <strong>{authLevels(this.props.permission)}</strong></p>
				<p className="user-profile-visible">Current Profile Visibility: <strong>{this.props.profileVisible ? "Yes" : "No"}</strong></p>
				<label htmlFor="visible">Profile visible to others? </label>
				<input
					type="checkbox"
					name="visible"
					checked={this.state.profileVisible ? true : false}
					onChange={this.setProfileVisibility}
				/>
				<form>
					<div className="user-profile-image">
						<img alt={this.state.displayName} src={this.state.headshotSrc} />
						<span className="upload-buttons">
							<label htmlFor="file-upload" className="custom-file-upload">
								Select profile pic
						</label>
							<input id="file-upload" className="button" type="file" name="file-upload" onChange={this.fileSelectedHandler} />
							<Button onClick={this.fileUploadHandler}>Upload</Button>
							<div>{this.state.selectedFilename}</div>
						</span>
					</div>
					<div className="form-row">
						<span className="form-label">Name</span>
						<input
							type="text"
							name="displayName"
							placeholder="Publicly Visible Name"
							value={this.state.displayName || ""}
							onChange={this.handleChange}
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
							value={this.state.title || ""}
							onChange={this.handleChange}
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
							value={this.state.twitter || ""}
							onChange={this.handleChange}
							className="form-element"
						/>
					</div>
					<div className="form-row">
						<span><img className="form-label-img" src="../images/github-icon.png" alt="Github" /></span>
						<input
							type="text"
							name="github"
							placeholder="GitHub URL"
							value={this.state.github || ""}
							onChange={this.handleChange}
							className="form-element"
						/>
					</div>
					<div className="form-row">
						<span><img className="form-label-img" src="../images/facebook-icon.png" alt="Facebook" /></span>
						<input
							type="text"
							name="facebook"
							placeholder="Facebook URL"
							value={this.state.facebook || ""}
							onChange={this.handleChange}
							className="form-element"
						/>
					</div>
					<div className="form-row">
						<span><img className="form-label-img" src="../images/www-icon.png" alt="Portfolio" /></span>
						<input
							type="text"
							name="portfolio"
							placeholder="Your Portfolio URL"
							value={this.state.portfolio || ""}
							onChange={this.handleChange}
							className="form-element"
						/>
					</div>
					<label htmlFor="description">Tell the world about yourself!</label>

					<QuillStyles>
						<ReactQuill
							name="description"
							value={this.state.description || ""}
							onChange={this.handleQuillChange}
							theme="snow"
						/>
					</QuillStyles>


				</form>
				<div className="button-row">
					<Button onClick={this.handleSubmit}>Save</Button>
					<Button onClick={() => editMode(false)}>Cancel</Button>
				</div>

			</PersonDetailFormStyles>
		)
	}
}

export default PersonDetailForm;
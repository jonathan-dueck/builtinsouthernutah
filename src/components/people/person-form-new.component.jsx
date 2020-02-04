import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { db } from '../../config/Firebase';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { QuillStyles } from './person-detail-form.styles'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextArea from '@material-ui/core/TextareaAutosize';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'


const useStyles = makeStyles({
	container: {
		background: 'white',
		margin: '0 auto',
		width: '650px',
		opacity: 0.9,
		padding: '3rem'

	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '500px',
		margin: '2rem auto'
	},
	formGroup: {
		display: 'flex'
	},
	field: {
		width: '380px',
		marginBottom: '2rem'
	},
	textArea: {
		minWidth: '360px',
		marginBottom: '2rem',
		padding: '1rem',
	},
	buttonGroup: {
		display: 'flex'
	},
	button: {
		margin: '0 1rem',
		minHeight: '5rem',
		minWidth: '7rem'
	},
	icon: {
		height: '40px',
		margin: '5px 20px 0 -60px',
	},
	left: {
		marginLeft: 0
	},
	link: {
		textDecoration: 'none',
		color: '#000',
	},
	userImage: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		display: 'block'
	}

});

const ProfileForm = (props) => {
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

	const classes = useStyles();

	const handleChangeVisbility = e => {
		const isProfileVisible = (e.target.value === "true" ? true : false)
		setProfileVisible(isProfileVisible)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const { id } = props;

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
				profileVisible: Boolean(profileVisible),
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


	return (
		<div className={classes.container}>
			<Typography variant="h2">
				Your Profile
            </Typography>
			<form className={classes.form} autoComplete="off">




				<div className="userImage">
					<img className={classes.headshot} alt={displayName} src={headshotSrc} />
				</div>
				<div className="upload-buttons">
					<label htmlFor="file-upload" className="custom-file-upload">Select profile pic</label>
					<input id="file-upload" className="button" type="file" name="file-upload" onChange={setSelectedFilename} />
					<Button>Upload</Button>
				</div>
				<div>{selectedFilename}</div>





				<TextField
					required
					label="Your Name"
					placeholder="Your Name"
					variant="outlined"
					className={classes.field}
					defaultValue={displayName}
					onChange={e => setDisplayName(e.target.value)}

				/>
				<TextField
					required
					label="Job Title"
					placeholder="Job Title"
					variant="outlined"
					className={classes.field}
					defaultValue={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<div className={classes.formGroup}>
					<img className={classes.icon} alt="Twitter" src="/images/twitter-icon.png" />
					<TextField
						label="Twitter"
						placeholder="Twitter"
						variant="outlined"
						className={classes.field}
						value={twitter || ""}
						onChange={e => setTwitter(e.target.value)}
					/>
				</div>
				<div className={classes.formGroup}>
					<img className={classes.icon} alt="Github" src="/images/github-icon.png" />
					<TextField
						label="Github"
						placeholder="Github"
						variant="outlined"
						className={classes.field}
						defaultValue={github || ""}
						onChange={e => setGithub(e.target.value)}
					/>
				</div>
				<div className={classes.formGroup}>
					<img className={classes.icon} alt="Facebook" src="/images/facebook-icon.png" />
					<TextField
						label="Facebook"
						placeholder="Facebook"
						variant="outlined"
						className={classes.field}
						defaultValue={facebook}
						onChange={e => setFacebook(e.target.value)}
					/>
				</div>
				<div className={classes.formGroup}>
					<img className={classes.icon} alt="Portfolio" src="/images/www-icon.png" />
					<TextField
						label="Portfolio"
						placeholder="Portfolio"
						variant="outlined"
						className={classes.field}
						defaultValue={portfolio}
						onChange={e => setPortfolio(e.target.value)}
					/>
				</div>
				<QuillStyles>
					<ReactQuill
						name="description"
						value={description || ""}
						onChange={text => setDescription(text)}
						theme="snow"
					/>
				</QuillStyles>
				<br />
				<br />
				<FormControl className={classes.buttonGroup}>
					<RadioGroup>
						<Typography>
							Make Your Profile Visible to Others?
                        </Typography>
						<div className={classes.buttonGroup} >
							<FormControlLabel onClick={handleChangeVisbility} checked={Boolean(profileVisible)} value={true} control={<Radio />} label="Visible" />
							<FormControlLabel onClick={handleChangeVisbility} checked={Boolean(!profileVisible)} value={false} control={<Radio />} label="Invisible" />
						</div>
					</RadioGroup>
				</FormControl>
				{/* <input type="checkbox" name="visible" checked={profileVisible ? true : false} /> */}
				<div className={classes.buttonGroup}>

					<Button onClick={handleSubmit} className={classes.button} color="primary" variant="outlined" disableElevation>
						Save
                    </Button>

					<Button className={classes.button} color="default" variant="outlined" disableElevation>
						<Link to="/" className={classes.link}>Cancel</Link>
					</Button>
				</div>
				{/* TODO:  Textarea, Image Upload, Profile Visibility, Save/Cancel Button hookups */}
			</form>
		</div>
	);
}

export default withRouter(ProfileForm);
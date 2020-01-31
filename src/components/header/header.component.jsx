import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';

const useStyles = makeStyles(theme => ({
	text: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	toolbar: {
		height: '100px',
		backgroundColor: '#012A6C',
		borderBottom: '1px solid #ffc322'
	},
	logo: {
		height: '60px',
		marginRight: '20px'
	},
	headline: {
		display: 'block',
		textAlign: 'left'
	},
	subHeadline: {
		display: 'block'
	},
	navLinkRow: {
		marginTop: '125px',
		display: 'flex',
		justifyContent: 'center',
		margin: '0 auto',
	},
	navButton: {
		borderRadius: '2px',
		opacity: '0.8',
		display: 'inline-block',
		backgroundColor: '#fff',
		fontSize: '2rem',
		color: 'black',
		textDecoration: 'none',
		margin: '1.5rem',
		padding: '1rem 1.5rem',
		cursor: 'pointer'
	},

}))

const Header = (props) => {

	const logout = () => {
		props.history.push("/people");
		fire.auth().signOut();
	}

	const classes = useStyles();
	const { currentUser } = props;
	console.log({ currentUser });
	return (
		<Fragment>
			<Link to="/">
				<AppBar>
					<ToolBar className={classes.toolbar}>
						<img alt="Built in Southern Utah" className={classes.logo} src="/images/logo.png" />
						<div className="text">
							<Typography variant="h2" className={classes.headline}>
								Built In Southern Utah
                    </Typography>
							<Typography variant="h5" className={classes.subHeadline}>
								Dedicated to energizing the Southern Utah technology community
                    </Typography>
						</div>
					</ToolBar>
				</AppBar>
			</Link>
			<div className={classes.navLinkRow}>
				<a href="/" className={classes.navButton}>People</a>

				{
					currentUser && (
						<a href={`/people/${currentUser.uid}`} className={classes.navButton}>Your Profile</a>
					)
				}

				{/* <a href="/events" className="button">Events</a> */}
				{/* <a href="/companies" className="button">Companies</a> */}
				{/* <a href="/projects" className="button">Projects</a> */}
				<a href="/about" className={classes.navButton}>About</a>
				{
					currentUser ?
						<button onClick={logout} className={classes.navButton}>Sign Out</button>
						:
						<a href="/signup" className={classes.navButton}>Login</a>
				}
			</div>










		</Fragment >
	)
}

export default withRouter(Header);
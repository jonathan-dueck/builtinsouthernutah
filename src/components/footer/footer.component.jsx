import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#012c6a',
		color: '#fffff2',
		borderTop: '1px solid #ffc323',
		fontSize: '1.6rem',
		padding: '1.5rem 0',
		marginTop: 'calc(100vh + 80px)',
		position: 'absolute',
		height: '80px'
	},
	text: {
		textAlign: 'center',
	},
	link: {
		textDecoration: 'none',
		color: '#fffff2'
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.root}>
			<Toolbar>
				<Typography variant="h4" className={classes.text}>
					<span><strong>&copy; 2020 BuiltInSouthernUtah.org</strong></span><br />
					<span><Link className={classes.link} to="/about">About</Link> | <Link className={classes.link} to="/privacy-policy">Privacy Policy</Link></span>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Footer;
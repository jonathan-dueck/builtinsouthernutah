import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		display: 'flex',
		flexDirection: 'column',
		width: '300px',
		minHeight: '400px',
		backgroundColor: '#fff',
		margin: '0 2rem 3.5rem 2rem;',
		opacity: 0.9,
		textDecoration: 'none'
	},
	photo: {
		marginLeft: '-19px'
	},
	personName: {
		fontSize: '3rem',
		margin: '0rem 0',
		textDecoration: 'none',
		color: '#000000'
	},
	personTitle: {
		fontSize: '1.5rem',
		display: 'block',
		textDecoration: 'none',
		color: 'black'

	}
})

const SingleCard = ({ id, displayName, title, headshotSrc }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<a style={{ textDecoration: 'none' }} href={`/people/${id}`} alt={displayName}>
				<CardContent>
					<img className={classes.photo} alt="Person name" src={headshotSrc || "/images/person-silhouette.png"} />
					<Typography className={classes.personName}>
						<span className={classes.personName}>{displayName}</span>
					</Typography>
					<Typography className={classes.personTitle}>
						{title}
					</Typography>
				</CardContent>
			</a>
		</Card >
	)
}

export default SingleCard;
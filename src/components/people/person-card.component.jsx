import React from 'react';
import Card from '../../globalstyles/card';

const SingleCard = ({ id, displayName, title, headshotSrc }) => {

	return (
		<Card>
			<a style={{ textDecoration: 'none' }} href={`/people/${id}`} alt={displayName}>
				<img className="image" alt={displayName} src={headshotSrc || "/images/person-silhouette.png"} />
				<span className="heading">{displayName}</span>
				<span className="description">{title}</span>
			</a>
		</Card >
	)
}

export default SingleCard;
import React, { useState, useEffect } from 'react';
import { db } from '../../config/Firebase';
import PersonCard from './person-card-new.component';

import ResultStyles from './people-results.styles';
import Loader from '../loader/loader.component';

export default function PeopleResults() {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const renderCards = () => {
		const users = results.map((person) => (
			<PersonCard
				id={person.id}
				key={person.id}
				displayName={person.displayName}
				title={person.title}
				headshotSrc={person.headshotSrc}
			/>
		))
		return users;
	}

	useEffect(() => {
		setIsLoading(true)
		const profileCards = [];
		db.collection('profiles').get().then((snapshot) => {
			snapshot.docs.forEach(doc => {
				const data = doc.data();
				data.id = doc.id;
				if (data.profileVisible) {
					profileCards.push(data)
				}
				setResults(profileCards)
			})
			setIsLoading(false);
		});
	}, []);

	if (isLoading) return <Loader />
	if (results.length === 0) {
		return <h2>No user profiles were found.</h2>
	} else {
		return (
			<ResultStyles>
				{renderCards()}
			</ResultStyles>
		)
	}
}

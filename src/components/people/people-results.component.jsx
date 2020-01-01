import React, { useState, useEffect } from 'react';
import { db } from '../../config/Firebase';
import PersonCard from './person-card.component';

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
				{/* {JSON.stringify(results)} */}
			</ResultStyles>
		)
	}
}

// class PeopleResults extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.renderCards = this.renderCards.bind(this);

// 		this.state = {
// 			results: [],
// 			isLoading: false
// 		}
// 	}



	// componentDidMount() {
	// 	this.setState({ isLoading: true });
	// 	db.collection('profiles').get().then((snapshot) => {
	// 		snapshot.docs.forEach(doc => {
	// 			const data = doc.data();
	// 			// data.id = doc.id;
	// 			if (data.profileVisible) {
	// 				this.setState({ results: [...this.state.results, data] });
	// 			}
	// 			this.setState({ isLoading: false })
	// 		})
	// 	});
	// }

// 	render() {
// 		if (this.state.isLoading) return <Loader />
// 		if (this.state.results.length === 0) {
// 			return <h2>No user profiles were found.</h2>
// 		} else {
// 			return (
// 				<ResultStyles>
// 					{this.renderCards()}
// 				</ResultStyles>
// 			)
// 		}

// 	}
// }

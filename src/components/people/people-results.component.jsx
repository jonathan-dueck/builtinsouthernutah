import React from 'react';
import { db } from '../../config/Firebase';

import ResultStyles from './people-results.styles';

import PersonCard from './person-card.component';

class PeopleResults extends React.Component {

	constructor(props) {
		super(props);

		this.renderCards = this.renderCards.bind(this);

		this.state = {
			results: []
		}
	}

	renderCards() {
		const users = this.state.results.map((person) => (
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

	componentDidMount() {
		db.collection('profiles').get().then((snapshot) => {
			snapshot.docs.forEach(doc => {
				// console.log("DOC ", doc)
				const data = doc.data();
				// data.id = doc.id;
				console.log({ data })
				if (data.profileVisible) {
					this.setState({ results: [...this.state.results, data] });
				}
			})
		});
	}

	render() {
		if (this.state.results.length === 0) {
			return <h2>No user profiles were found.</h2>
		} else {
			return (
				<ResultStyles>
					{this.renderCards()}
				</ResultStyles>
			)
		}

	}
}

export default PeopleResults;
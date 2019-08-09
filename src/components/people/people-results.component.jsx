import React from 'react';
import { db } from '../../config/Firebase';

import './people-results.styles.scss';

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
				id={person.belongsToUser}
				key={person.belongsToUser}
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
				// console.log({ data })
				this.setState({ results: [...this.state.results, data] });
			})
		});
	}

	render() {
		return (
			this.renderCards()
		)

	}
}

export default PeopleResults;
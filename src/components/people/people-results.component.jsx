import React from 'react';
import './people-results.styles.scss';

import PersonCard from './person-card.component';

class Results extends React.Component {
    render() {
        return (
            <div className="results">
                <PersonCard />
            </div>
        )
    }
}

export default Results;
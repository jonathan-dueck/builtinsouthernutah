import React from 'react';

import './person-card.styles.scss';

const PersonCard = ({ id, name, subtitle, headshotSrc }) => (
    <div className="person-card">
        <a href={`/people/${id}`} alt={name}>
            <img alt="Person Name" src={headshotSrc} className="user-photo" />
            <div className="user-name">{name}</div>
            <div className="user-description">{subtitle}</div>
        </a>
    </div>
);

export default PersonCard;



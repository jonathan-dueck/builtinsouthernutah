import React from 'react';

import PersonCardStyles from './person-card.styles';

const PersonCard = ({ id, displayName, title, headshotSrc }) => (
  <PersonCardStyles>
    <a href={`/people/${id}`} alt={displayName}>
      <img alt={displayName} src={headshotSrc} className="user-photo" />
      <div className="user-name">{displayName}</div>
      <div className="user-description">{title}</div>
    </a>
  </PersonCardStyles>
);

export default PersonCard;



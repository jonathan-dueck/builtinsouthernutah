import React from 'react';
import PersonDetailStyles from './person-detail.styles';


class PersonDetail extends React.Component {
    render() {
        const { displayName, headshotSrc, description, editMode } = this.props;
        return (
            <PersonDetailStyles>
                <p>Person Detail Component</p>
                <div className="person-detail-container">
                    <div className="user-image">
                        <img className="user-image" alt={displayName} src={headshotSrc} />
                    </div>
                    <div className="user-info-column">
                        <h1 className="user-name">{displayName}</h1>
                        <p className="user-description">{description}</p>
                    </div>
                </div>
                <button onClick={() => editMode(true)}>Edit Profile</button>
            </PersonDetailStyles>
        )
    }
}

export default PersonDetail;

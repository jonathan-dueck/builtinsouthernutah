import React from 'react';
import PersonDetailStyles from './person-detail.styles';
import Button from '../../globalstyles/button';


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
                <Button onClick={() => editMode(true)}>Edit Profile</Button>
            </PersonDetailStyles>
        )
    }
}

export default PersonDetail;

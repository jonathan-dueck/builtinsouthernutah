import React from 'react';
import PersonDetailStyles from './person-detail.styles';


class PersonDetail extends React.Component {
    render() {
        const { name, headshotSrc, description, editMode } = this.props;
        return (
            <PersonDetailStyles>
                <p>Person Detail Component</p>
                <div className="person-detail-container">
                    <div className="user-image">
                        <img className="user-image" alt={name} src={headshotSrc} />
                    </div>
                    <div className="user-info-column">
                        <h1 className="user-name">{name}</h1>
                        <p className="user-description">{description}</p>
                    </div>
                </div>
                <button onClick={() => editMode(true)}>Edit Profile</button>
            </PersonDetailStyles>
        )
    }
}

export default PersonDetail;

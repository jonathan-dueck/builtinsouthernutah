import React, { Fragment } from 'react';

import './persondetailpage.style.scss';

class PersonDetailPage extends React.Component {

    componentDidMount() {
        // Fetch this user from the backend, getting user id from address bar
        console.log("ComponentDidMount");
    }
    render() {

        let name = "Some Dev";
        let headshotSrc = "https://via.placeholder.com/300/400";
        let description = "Likes Vue.JS";
        const { id, /* name, subtitle, headshotSrc, description */ } = this.props;
        return (
            <Fragment>
                <div className="person-detail-container">
                    <div className="user-image">
                        <img className="user-image" alt={name} src={headshotSrc} />
                    </div>
                    <div className="user-info-column">
                        <h1 className="user-name">{name}</h1>
                        <p className="user-description">{description}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PersonDetailPage;
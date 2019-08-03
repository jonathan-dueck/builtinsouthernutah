import React, { Fragment } from 'react';
import './header.styles.scss';

const Header = ({ user }) => (
    <Fragment>
        <div className="header">
            <div className="header-text">
                <img className="logo" alt="Built in Southern Utah" src="/images/logo.png" />
                <div className="header-text-row">
                    <h1>Built in Southern Utah</h1>
                    <p>Dedicated to energizing the Southern Utah technology community </p>
                </div>

            </div>
        </div>
        <div className="nav-row">
            {
                user ? 'logged in' : 'logged out'
            }
            <a href="/people" className="button">People</a>
            {/* <a href="/events" className="button">Events</a> */}
            {/* <a href="/companies" className="button">Companies</a> */}
            {/* <a href="/projects" className="button">Projects</a> */}
            <a href="/about" className="link">About</a>
            {
                user ?
                    <a href="/" className="button">Sign Out</a>
                    :
                    <a href="/signup" className="button">Login</a>
            }
        </div>
    </Fragment>
)

export default Header;
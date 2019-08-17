import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';
import './header.styles.scss';

class Header extends React.Component {

	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout() {
		this.props.history.push("/people");
		fire.auth().signOut();
	}

	render() {
		const { currentUser } = this.props;
		return (
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

					<a href="/people" className={`button ${(this.props.location.pathname === '/' || this.props.location.pathname.includes('/people')) ? 'active' : ''}`}>People</a>

					{
						currentUser && (
							<a href={`/people/${currentUser.uid}`} className={`button ${(this.props.location.pathname.includes('/profile')) ? 'active' : ''}`}>Your Profile</a>
						)
					}

					{/* <a href="/events" className="button">Events</a> */}
					{/* <a href="/companies" className="button">Companies</a> */}
					{/* <a href="/projects" className="button">Projects</a> */}
					<a href="/about" className={`link ${this.props.location.pathname === '/about' ? 'active' : ''}`}>About</a>
					{
						currentUser ?
							<button onClick={this.logout} className="sign-out">Sign Out</button>
							:
							<a href="/signup" className={`button ${this.props.location.pathname === '/signup' ? 'active' : ''}`}>Login</a>
					}
				</div>
			</Fragment>
		)
	}
}

export default withRouter(Header);
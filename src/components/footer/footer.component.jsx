import React from 'react';
import './footer.styles.scss';

const Footer = () => (
	<div className="footer">
		<span><strong>&copy; 2019 BuiltInSouthernUtah.org</strong></span>
		<span><a className="link" href="/about">About</a> | <a className="link" href="/privacy-policy">Privacy Policy</a></span>
	</div>
)

export default Footer;
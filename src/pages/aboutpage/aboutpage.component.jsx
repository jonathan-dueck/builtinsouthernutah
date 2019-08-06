import React from 'react';
import AboutStyles from './aboutpage.styles';

const AboutPage = () => (
  <AboutStyles>
    <div className="developer">
      <h1>Are you a developer?</h1>
      <p>Add your profile to the site to showcase your work and find like-minded folks to work on projects with!</p>
    </div>
    <div className="upcoming">
      <h1>Upcoming Features</h1>
      <p>We plan to expand <strong>Built In Southern Utah</strong> to include job listings, local technology event announcements, company profiles and more! Interested in contributing? Reach out!</p>
    </div>
  </AboutStyles>
)

export default AboutPage;
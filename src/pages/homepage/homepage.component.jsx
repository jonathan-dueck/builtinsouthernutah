import React, { Fragment } from 'react';
import PersonGridStyles from './homepage.styles';
import PeopleResults from '../../components/people/people-results.component';



const HomePage = () => (
    <Fragment>
        <h1>People</h1>
        <PersonGridStyles>
            <PeopleResults />
        </PersonGridStyles>
    </Fragment>
)

export default HomePage;
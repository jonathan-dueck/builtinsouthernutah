import React, { Fragment } from 'react';
import PersonGridStyles from './homepage.styles';
import PeopleResults from '../../components/people/people-results.component';



const HomePage = () => (
    <Fragment>
        <PersonGridStyles>
            <PeopleResults />
        </PersonGridStyles>
    </Fragment>
)

export default HomePage;
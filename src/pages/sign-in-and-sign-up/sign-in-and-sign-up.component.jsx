import React, { Fragment } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUpPage extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Sign in and Sign Up Page</h1>
                <SignIn />
                <SignUp />
            </Fragment>
        )
    }
}

export default SignInAndSignUpPage;
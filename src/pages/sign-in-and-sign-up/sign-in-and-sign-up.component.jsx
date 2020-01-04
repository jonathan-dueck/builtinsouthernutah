import React, { useState } from 'react';
import SignInForm from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInUpStyles from './sign-in-and-sign-up.styles';
import { googleSignIn, gitHubSignIn, twitterSignIn } from '../../config/Firebase';


const SignInAndSignUpPage = () => {
  const [formStatus, setFormStatus] = useState('new');

  return (
    <SignInUpStyles>
      <div className="form-container sign-up-container">
        Sign in with:
        <div className="third-party-auth">
          <div className="auth-button" onClick={googleSignIn}> Google</div>
          <div className="auth-button" onClick={gitHubSignIn}>GitHub</div>
          <div className="auth-button" onClick={twitterSignIn}>Twitter</div>
        </div>
        <hr />
        <div>Or Sign In With Email and Password</div>
        <hr />
        <div>
          <span onClick={() => setFormStatus('new')} className="new-user-active">New User</span>
          <span onClick={() => setFormStatus('returning')} className="returning-user-active">Returning User</span>
        </div>

        {
          formStatus === "new" && (
            <div className="form-container sign-in-container">
              <SignUpForm />
            </div>
          )
        }
        {
          formStatus === "returning" && (
            <div className="form-container sign-up-container">
              <SignInForm />
            </div>
          )
        }
      </div>
    </SignInUpStyles>
  )
}

export default SignInAndSignUpPage;
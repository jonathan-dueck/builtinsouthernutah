import React, { useState } from 'react';
import SignInForm from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInUpStyles from './sign-in-and-sign-up.styles';
import { googleSignIn, gitHubSignIn, twitterSignIn } from '../../config/Firebase';
import ContentArea from '../../globalstyles/contentArea';


const SignInAndSignUpPage = () => {
  const [formStatus, setFormStatus] = useState('new');

  return (
    <SignInUpStyles>
      <ContentArea>
        <div className="form-container sign-up-container">
          <h1>Sign In With</h1>
          <div className="third-party-auth">
            <div className="auth-button" onClick={googleSignIn}> <img className="social-icon" alt="Google" src="/images/google-icon.png" /></div>
            <div className="auth-button" onClick={gitHubSignIn}><img className="social-icon" alt="Google" src="/images/github-icon.png" /></div>
            <div className="auth-button" onClick={twitterSignIn}><img className="social-icon" alt="Google" src="/images/twitter-logo.png" /></div>
          </div>
          <div>Or Use Email and Password</div>
          <div className="auth-option-tabs">
            <span onClick={() => setFormStatus('new')} className={`pointer ${formStatus === 'new' ? 'new-user-active' : ''}`}>New User</span>
            <span onClick={() => setFormStatus('returning')} className={`pointer ${formStatus === 'returning' ? 'returning-user-active' : ''}`}>Returning User</span>
          </div>

          {
            formStatus === "new" && (
              <div className="sign-in-container">
                <SignUpForm />
              </div>
            )
          }
          {
            formStatus === "returning" && (
              <div className="sign-up-container">
                <SignInForm />
              </div>
            )
          }
        </div>
      </ContentArea>
    </SignInUpStyles>
  )
}

export default SignInAndSignUpPage;
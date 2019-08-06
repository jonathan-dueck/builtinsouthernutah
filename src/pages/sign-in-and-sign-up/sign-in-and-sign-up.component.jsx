import React from 'react';
import SignInForm from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInUpStyles from './sign-in-and-sign-up.styles';

class SignInAndSignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: 'signin'
    }
  }

  render() {
    return (
      <SignInUpStyles>
        <div className="form-container sign-up-container">
          {
            this.state.showForm === "signin" && (
              <div className="form-container sign-in-container">
                <SignInForm />
                <div className="switch-state" onClick={() => this.setState({ showForm: 'signup' })}>Create Account</div>
              </div>
            )
          }
          {
            this.state.showForm === "signup" && (
              <div className="form-container sign-up-container">
                <SignUpForm />
                <div className="switch-state" onClick={() => this.setState({ showForm: 'signin' })}>Existing User?</div>
              </div>
            )
          }
        </div>
      </SignInUpStyles>
    )
  }
}

export default SignInAndSignUpPage;
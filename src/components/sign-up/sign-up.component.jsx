import React from 'react';
import { withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';
import SignUpStyles from './sign-up.styles';


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      displayName: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        this.props.history.push('/people');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <SignUpStyles>
        <h1>Sign Up</h1>
        <form>
          <div>
            <input
              value={this.state.displayName}
              onChange={this.handleChange}
              type="text"
              name="displayName"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <div>
            <button type="submit" onClick={this.signup}>Register</button>
          </div>
        </form>
      </SignUpStyles>
    )
  }
}

export default withRouter(SignUp);
import React from 'react';
import { withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result => {
        console.log("return from login. Should redirect to /people now.");
        this.props.history.push('/people');
      }))
      .catch((error) => {
        console.log(error);
      })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email Address</label>
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
            <button type="submit" onClick={this.login}>Log In</button>
            <button type="submit" onClick={this.signup}>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);
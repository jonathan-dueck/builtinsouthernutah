import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInStyles from './sign-in.styles';
import firebase from '../../config/Firebase';
import fire from '../../config/Firebase';


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    firebase.auth().getRedirectResult().then((result => {
      if (result && result.user) {
        this.props.history.push('/people');
      }
    }))
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
      <SignInStyles>

        <h1>Returning Users</h1>
        <p>Edit your profile or add fresh content!</p>
        <form>
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
            <button type="submit" onClick={this.login}>Log In</button>
          </div>
        </form>
      </SignInStyles>
    )
  }
}

export default withRouter(SignIn);
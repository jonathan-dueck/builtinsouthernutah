import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SignInStyles from './sign-in.styles';
import firebase from '../../config/Firebase';
import fire from '../../config/Firebase';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    firebase.auth().getRedirectResult().then((result => {
      if (result && result.user) {
        this.props.history.push('/people');
      }
    }))
  });

  const handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  const login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result => {
        this.props.history.push('/people');
      }))
      .catch((error) => {
        console.log(error);
      })
  }

  const signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(result => {
        this.router.push('/people/new')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <SignInStyles>

      <h1>Returning Users</h1>
      <p>Edit your profile or add fresh content!</p>
      <form>
        <div>
          <input
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <div>
          <button type="submit" onClick={login}>Log In</button>
        </div>
      </form>
    </SignInStyles>
  );

}

// class SignIn extends React.Component {

//   constructor(props) {
//     super(props);
//     this.login = this.login.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   componentDidMount() {
// firebase.auth().getRedirectResult().then((result => {
//   if (result && result.user) {
//     this.props.history.push('/people');
//   }
// }))
//   }

//   handleChange(e) {
// this.setState({ [e.target.name]: e.target.value });
//   }

//   login(e) {
// e.preventDefault();
// fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//   .then((result => {
//     this.props.history.push('/people');
//   }))
//   .catch((error) => {
//     console.log(error);
//   })
//   }

//   signup(e) {
// e.preventDefault();
// fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//   .then(result => {
//     this.router.push('/people/new')
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   }


//   render() {
//     return (
// <SignInStyles>

//   <h1>Returning Users</h1>
//   <p>Edit your profile or add fresh content!</p>
//   <form>
//     <div>
//       <input
//         value={this.state.email}
//         onChange={this.handleChange}
//         type="email"
//         name="email"
//         placeholder="Email"
//       />
//     </div>
//     <div>
//       <input
//         value={this.state.password}
//         onChange={this.handleChange}
//         type="password"
//         name="password"
//         placeholder="Your Password"
//       />
//     </div>
//     <div>
//       <button type="submit" onClick={this.login}>Log In</button>
//     </div>
//   </form>
// </SignInStyles>
//     )
//   }
// }

export default withRouter(SignIn);
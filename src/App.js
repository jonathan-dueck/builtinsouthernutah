import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import CompaniesPage from './pages/companiespage/companiespage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import EventsPage from './pages/eventspage/eventspage.component';
import PersonDetailPage from './pages/persondetailpage/persondetailpage.component';
import PersonEditPage from './pages/personeditpage/personeditpage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.component';

import { Route, Switch, Redirect } from 'react-router-dom';
import fire, { db } from './config/Firebase';

const UserContext = React.createContext();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      identification: {}
    }
    this.authListener = this.authListener.bind(this);
    this.getContext = this.getContext.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('BuiltInSouthernUtah', user.uid);
        this.getContext();
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  };

  getContext() {
    const uid = localStorage.getItem('BuiltInSouthernUtah');
    const docRef = db.collection('profiles').doc(uid);

    docRef.get().then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        const userCreds = {
          permission: userData.permission,
          id: userData.id
        }
        this.setState({ identification: userCreds })
      } else {
        console.log("No such document")
        console.log("THIS: ", this)
      }
    }).catch((err) => {
      console.log("Error getting document", err);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <UserContext.Provider value={this.state.identification}>

            <Header currentUser={this.state.user} />
            <Switch>
              <Route exact path='/people' component={HomePage} />
              <Route exact path='/people/new' component={PersonEditPage} />
              <Route exact path='/people/:id' component={PersonDetailPage} />
              <Route exact path='/people/:id/edit' component={PersonEditPage} />
              <Route exact path='/events' component={EventsPage} />
              <Route exact path='/companies' component={CompaniesPage} />
              <Route exact path='/projects' component={ProjectsPage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/signup' render={() => (this.state.user && !this.state.user.length === 0) ? (<Redirect to='/people' />) : (<SignInAndSignUp />)} />
              <Route exact path='/privacy-policy' component={PrivacyPolicy} />
              <Route exact path='/' component={HomePage} />
            </Switch>

            <Footer />

          </UserContext.Provider>
        </div>
      </div>
    );
  }
}

export { UserContext };
export default App;

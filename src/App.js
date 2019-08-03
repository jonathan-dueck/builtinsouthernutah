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
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route, Switch, Redirect } from 'react-router-dom';
import fire from './config/Firebase';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('BuiltInSouthernUtah', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    })
  };


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.user} />

        <Switch>
          <Route exact path='/people' component={HomePage} />
          <Route exact path='/people/:id' component={PersonDetailPage} />
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/companies' component={CompaniesPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/signup' render={() => (this.state.user && !this.state.user.length === 0) ? (<Redirect to='/people' />) : (<SignInAndSignUp />)} />
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

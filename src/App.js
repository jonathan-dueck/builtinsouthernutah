import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import CompaniesPage from './pages/companiespage/companiespage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import EventsPage from './pages/eventspage/eventspage.component';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/companies' component={CompaniesPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/people' component={HomePage} />
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from '../features/nav/NavBar/NavBar';
import EventDashboard from '../features/event/EventDashboard/EventDashboard';
import { Container } from "semantic-ui-react";
import { Route, Switch } from 'react-router-dom';
import PeopleDashboard from '../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../features/user/Settings/SettingsDashboard';
import HomePage from '../features/home/HomePage';
import { TestComponent } from '../features/testarea/TestComponent';
import { EventDetailedPage } from '../features/event/EventDetailed/EventDetailedPage';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/people' component={PeopleDashboard} />
              </Switch>
            </Container>
          </div>
        )} />


      </div>
    );
  }
}

export default App;

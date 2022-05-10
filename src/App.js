import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


import Tmpage from './components/Tmpage';

  
class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://class-schedule-app00.herokuapp.com/api/announcements/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      this.setState({ sessions: data })
    })
    .catch(console.log)
  }

  render() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          
          <Route path='/tmpage' component={Tmpage} />
          <Announcement announcements={this.state.announcements} />
          <Session sessions={this.state.sessions} />
          <Staff staff={this.state.staff} />

        </Switch>
      </Router>
    </>
  );
}
}

export default App;

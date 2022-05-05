import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Student from './components/pages/Student';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Studentform from './components'

import Profile from './components/pages/Profile';
import Tmpage from './components/pages/Tmpage';


import Announcement from './components/pages/Announcement';
import Login from './components/pages/Login';
import Session from './components/pages/Session';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          
          <Route path='/profile' component={Profile} />
          <Route path='/tmpage' component={Tmpage} />
          <Route path='/studentform' component={Studentform} />

          
      </Switch>
      </Router>
    </>
  );
}

export default App;

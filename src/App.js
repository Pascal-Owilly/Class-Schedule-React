import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
// import {BodyGroup1} from "./BodyGroup1";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
// export default function () {
//   document.body.style.backgroundColor = '#ffffff';
//   document.body.style.margin = '0';
//   return <BodyGroup1 />;
// }
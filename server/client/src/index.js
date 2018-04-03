import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Assets from './components/Assets';
import Profile from './components/Profile';
import partnerLink1 from './components/partnerLink1';
import partnerLink2 from './components/partnerLink2';
import newAccount from './components/newAccount';
import Welcome from './components/Welcome';
import List from './components/DBList';

ReactDOM.render(
  <BrowserRouter path="/">
    <div>
    <Route path="/editProfile/:displayName&:firstName&:lastName&:email" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/assets" component={Assets} />
    <Route path="/profile/:displayName&:firstName&:lastName&:email" component={Profile} />
    <Route path="/partnerLink1" component={partnerLink1} />
    <Route path="/partnerLink2" component={partnerLink2} />
    <Route path="/newAccount" component={newAccount} />
    <Route path="/welcome/:displayName&:firstName&:lastName&:email" component={Welcome} />
    <Route path="/lists/:displayName&:firstName&:lastName&:email" component={List} />
    </div>
  </BrowserRouter>, document.getElementById('root'));

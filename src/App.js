import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import * as pages from './pages';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
        <Switch>
          <Route path="/" component={pages.Homepage} exact/>
          <Route path="/About" component={pages.About} exact />
          <Route path="/Projects" component={pages.Projects} exact />
          <Route path="/Contact" component={pages.Contact} exact />
          <Route component={pages.NotFoundPage} />
        </Switch>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;

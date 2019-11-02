import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as pages from './pages';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

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
          <script data-ad-client="ca-pub-6202902142885850" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Switch>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;

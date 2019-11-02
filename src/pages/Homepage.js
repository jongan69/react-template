import React, { Component } from 'react';

import MainImage from '../chill.png';

import '../App.css';

class Homepage extends Component {
    render(){
        return(
            <header className="App-header">
        <img src={MainImage} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to your landing page!</code>
        </p>
        <p>
        <code>To see the Github click 
            <a href="https://github.com/jongan69/react-template"> Here</a>
          </code>
        </p>
      </header> 
        )
    }
}

export default Homepage;
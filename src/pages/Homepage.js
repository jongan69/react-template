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
      </header> 
        )
    }
}

export default Homepage;
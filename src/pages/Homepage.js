import React, { Component } from 'react';

import '../App.css';
import MainImage from '../chill.png';

class Homepage extends Component {
    render(){
        return(
            <header className="App-header">
        {/* <img src={MainImage} className="App-logo" alt="logo" /> */}
        <p>
          <code>Welcome to your landing page!</code>
        </p>
      </header> 
        )
    }
}

export default Homepage;
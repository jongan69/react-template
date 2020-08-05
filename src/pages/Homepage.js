import React, { Component } from 'react';

import '../App.css';
import MainImage from '../chill.png';

class Homepage extends Component {
    render(){
        return(
            <header className="App-header">
        {/* <img src={MainImage} className="App-logo" alt="logo" /> */}
        <p>
          <code>Welcome the React Template landing page!</code>
        </p>
        <p>
        <code>To see the Github click 
            <a href="https://github.com/jongan69/react-template"> Here</a>
          </code>
        </p>
        <script data-ad-client="ca-pub-6202902142885850" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </header> 
        )
    }
}

export default Homepage;
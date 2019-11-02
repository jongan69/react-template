import React, { Component } from 'react';
import AdSense from 'react-adsense';

import '../App.css';

class Homepage extends Component {
  render() {
    return (
      <header className="App-header">
        <AdSense.Google
          client='ca-pub-6202902142885850'
          slot='3693217820'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />
        <iframe
          title="Homepage Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fLUYEp_cHmw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <p>
          <code>Welcome to the Antisocial Smoke Society</code>
        </p>
        <p>

        </p>
        <script data-ad-client="ca-pub-6202902142885850" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </header>
    )
  }
}

export default Homepage;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
const cheerio = require('cheerio')
const axios = require('axios')

function App() {

  axios.get('https://www.mohfw.gov.in/').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  console.log($)
})

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Map />

    </div>
  );
}

export default App;

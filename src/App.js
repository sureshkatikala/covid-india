import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
const cheerio = require('cheerio')
const axios = require('axios')

class App extends React.Component {
  // const [statesData, setObj] = useState()
  constructor(props) {
    super(props);
    this.state = {
      statesData: []
    };
  }
  // let scrapedData = [];
  // useEffect(() => {
  componentDidMount() {
    let scrapedData = []
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "a5459ef76emsha1ac71d39f2b86ap12c441jsn4644e84dc586"
      }
    })
      .then(response => {
        return response.json()
      })
.then(response => {
        console.log(response);
        console.log(response.state_wise)
        response.state_wise["Jammu & Kashmir"] = response.state_wise["Jammu and Kashmir"]        
        // Object.keys(response.state_wise["Jammu & Kashmir"]).forEach(data => {

        // })
        let jk = response.state_wise["Jammu and Kashmir"]
        let l = response.state_wise["Ladakh"]
        response.state_wise["Jammu & Kashmir"] = {
          active: parseInt(jk.active) + parseInt(l.active),
          confirmed: parseInt(jk.confirmed) + parseInt(l.confirmed),
          deaths: jk.deaths + l.deaths,
          deltaconfirmed: jk.deltaconfirmed + l.deltaconfirmed,
          deltadeaths: jk.deltadeaths + l.deltadeaths,
          deltarecovered: jk.deltarecovered + l.deltarecovered,
          recovered: jk.recovered + l.recovered
        }
        Object.keys(response.state_wise).forEach(el => {
          let stateName = el
          let confirmed = response.state_wise[el].confirmed
          scrapedData.push({ stateName, confirmed })
        })
        this.setState({ statesData: scrapedData })
      })
          .catch(err => {
            console.log(err);
          });
  }
  render() {
    return (
      <div className="App">
        <Map statesData={this.state.statesData} />
      </div>
    );
  }
}

export default App;

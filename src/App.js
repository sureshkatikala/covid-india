import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
const cheerio = require('cheerio')
const axios = require('axios')

class App extends React.Component{
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

    axios.get('https://www.mohfw.gov.in/').then((response) => {
      // Load the web page source code into a cheerio instance
      const $ = cheerio.load(response.data)
      // $("body > div:nth-child(3) > div > div > div > ol > strong > strong > strong > strong > div > table > tbody > tr > td").each((index, element) => {
      //   console.log($(element).text());
      // document.querySelector('body > div:nth-child(3) > div > div > div > ol > strong > strong > strong > strong > div > table > tbody > tr:nth-child(1)')
      // });
      $('body > div:nth-child(3) > div > div > div > ol > strong > strong > strong > strong > div > table > tbody > tr').each((index, element) => {
        const tds = $(element).find("td");
        const serial = $(tds[0]).text();
        const stateName = $(tds[1]).text();
        const indConfirmed = $(tds[2]).text();
        const foreignConfirmed = $(tds[3]).text();
        const cured = $(tds[4]).text();
        const deaths = $(tds[5]).text();
        const tableRow = { serial, stateName, indConfirmed, foreignConfirmed, cured, deaths };
        scrapedData.push(tableRow);
      });
      console.log(scrapedData)
      this.setState({statesData : scrapedData})
      // return scrapedData
    })
      // .then(setObj)
  // }, [])
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

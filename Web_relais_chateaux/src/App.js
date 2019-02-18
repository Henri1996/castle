import React, { Component } from 'react';
import './App.css';
import { read } from 'fs';
//var fs = require('fs');
//var myBuffer = require('./StarredRestaurant.js/index.js')
import myBuffer from './StarredRestaurant'
class App extends Component {
  
  
  render() {

  const listItems = Object.entries(myBuffer).map((d) => {
  const [val ,key ] = d;
  return <li> {val} </li>}
  );

    //var listC = getObj.ToString().map((value)=> <li>{value}</li>)
    return (
      <ul>
       {listItems}
      </ul>
    );
  }
   
}
export default App;

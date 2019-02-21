import React, { Component } from 'react';
import './App.css';
import StarredResto from './mesCompo/StarredResto'
import CardFilter from './mesCompo/CardFilter'
import {BodyBackgroundColor} from 'react-body-backgroundcolor'
//var fs = require('fs');
//var myBuffer = require('./StarredRestaurant.js/index.js')

var green = '#39D1B4';
class App extends Component {
  
  
  render() {


    //var listC = getObj.ToString().map((value)=> <li>{value}</li>)
    return (
      <div  >
        <h1 align="center">Comparator of French's castle</h1>
          <p align="center">The best castles whith Starred restaurant!</p>
          <h1></h1>
        <StarredResto/>
        
      
      </div>
    );
  }
   
}
export default App;

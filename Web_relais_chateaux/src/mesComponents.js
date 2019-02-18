
import React from 'react'
var fs = require('fs');

export const CoolComponent = () => <p>Hello Hello !</p>

export function CoolComponent2(){
    return <p>Bonjour Bonjour</p>
}

export function ReadJson(){
    var obj;
    var myBuffer = fs.readFileSync('StarredRestaurant.json')
    obj = JSON.parse(myBuffer.toString())
    
    return obj
  }

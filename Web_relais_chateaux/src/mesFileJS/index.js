

import React from 'react'






var scrapRel = require('./scrapRelais');
var scrapRes = require('./scrapResto');
var scrapRelRes = require('./scrapRelRes');

var get2resto = require('./LireFichier');
var Reltab = [];
var Restab = [];
var RestoTab = [];
var relais2resto = new Map();
var myMap = new Map();
var restaurant_relais_etoile = new Map()
var restaurant_relais_etoile2= [];




async function main(){
    
    
    //let promise = new Promise(function (resolve, reject) {scrapRel(laSuite, resolve);})
    //let re = await promise;
    let re2 = await new Promise((resolve,reject)=>{scrapRes(laSuite2,resolve)});
    //let re3 = await new Promise((resolve,reject)=>{scrapRelRes(Reltab,laSuite3,resolve)})
    
    relais2resto = get2resto();
    //relais2resto.forEach((ele,cle)=>console.log(cle+': '+ele))
    
    
    restaurant_relais_etoile =  Comparer_Resto_Michelin_Relais();
    //restaurant_relais_etoile.forEach((ele,cle)=>console.log(cle+': '+ele))
    console.log(restaurant_relais_etoile.size)
    //scrapRel(laSuite).then();
    //console.log(re);
    //Restab.forEach(ele=>console.log(ele));
    
}



main();
    
function Comparer_Resto_Michelin_Relais()
 {
     relais2resto.forEach((ele2,cle)=>{

    
     Restab.forEach((ele)=>{
         var exp = ''
         var ele_modifier = replaceAll(' ','[ ]',ele.toLowerCase());
         var reg = ele_modifier;
         var Reg = new RegExp(reg);
         try{
     if (Reg.test(ele2.trim().toLowerCase()))
     {
         if(ele.trim().toLowerCase() != 'es'&& ele.trim().toLowerCase() !='le m'&& ele.trim().toLowerCase() !='la table')
        restaurant_relais_etoile.set(cle,ele.trim());
     }}catch(err){}
     })
    })
     return restaurant_relais_etoile;
 }

function replaceAll(recherche, remplacement, chaineAModifier)
{
    //On effectue le remplacement dans la chaîne
    var re = new RegExp(recherche, 'g');
    return chaineAModifier.replace(re, remplacement);
}

function laSuite(tab){
    console.log(tab.length)
    Reltab= tab;
}
function laSuite2(tab){
    console.log(tab.length)
    //tab.forEach(ele=> console.log(ele));
    Restab = tab;
    //Restab.forEach(ele=>console.log(ele));
}
function laSuite3(map1,map2){
    console.log('map 1 ' + map1.size)
    console.log('map 2 ' + map2.size)
    map1.forEach((element,cl) => {
        console.log(cl+':'+element)
    });
    map2.forEach((ele,c)=>console.log(c+':'+ele))
    //tab.forEach(ele=> console.log(ele));
    //myMap = tab;
    
}
restaurant_relais_etoile.forEach(ele=>restaurant_relais_etoile2.push(ele))

function MonPremierCompo(name){
    return <p > {name} </p>
}

// return MonPremierCompo(restaurant_relais_etoile2[0])
//return MonPremierCompo("Henri de Montalembert")
/*
return squareValues.map((value)=>{
    (<div>
        <p>Chateaux étoilés : </p>
    <td >{value}</td>
    </div>)
})*/
//return <p>J'ai reussi !!!!!</p>
//Restab.forEach(ele=>console.log(ele));




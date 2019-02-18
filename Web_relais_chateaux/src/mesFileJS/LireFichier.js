const fs = require("fs");
let contenu;

var get2resto = function(){
contenu = fs.readFileSync("nomR.txt", "UTF-8");

var tab_resto = new Map();

var nouveau_contenu = contenu.split(':');

console.log('taille : ' + nouveau_contenu.length);

for(var i = 0; i<nouveau_contenu.length;i=i+2)
{
tab_resto.set(nouveau_contenu[i].trim(),nouveau_contenu[i+1]);
}
/*
tab_resto.forEach(function(val, cle){
console.log(cle+' : '+val);
})*/
return tab_resto;
}
module.exports = get2resto;
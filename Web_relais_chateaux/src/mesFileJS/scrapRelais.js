const cheerio = require('cheerio');
const fetch = require('node-fetch');
var myTab = [];




var myScrapR = function (cb,resolve){
var compt = 0;

var where = 0;

for(var i = 1 ; i < 9 ; i++)
{
  fetch("https://www.relaischateaux.com/fr/update-destination-results", 
  {"credentials":"include",
  "headers":{"accept":"/",
  "accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
  "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
  "x-requested-with":"XMLHttpRequest"},
  "referrer":"https://www.relaischateaux.com/fr/destinations/europe/france",
  "referrerPolicy":"origin-when-cross-origin","body":"page="+i+"&areaId=78",
  "method":"POST",
  "mode":"cors"})
  .then(function(response){
  response.json().then(function(value){
       where++;
    var repHtml = cheerio.load(value.html);
    //console.log(value);
    repHtml('h3').each(function(i, element){
      
      var a = repHtml(this);
      myTab[compt]=a.children().attr('href');
      compt++;
      
      
    });
    if(where==8)
      {
       cb(myTab)
       resolve("Scraping finish relais");
      }
    
  })
})
.catch(err=> console.log(err));

}
}
module.exports = myScrapR;





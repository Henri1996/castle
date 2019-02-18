const rp = require('request-promise');
const cheerio = require('cheerio');
var myTab = []; 
var compt = 0;
var where = 0 ;
var scrapR = function (cb,resolve){
for(var i = 1 ; i < 40 ; i++)
{

const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i;
rp(url)
.then(function(value){
where++;
  	var repHtml = cheerio.load(value);
    repHtml('div.poi_card-display-title').each(function(i, element){
      
    	var a = repHtml(this);
      myTab[compt]=a.text().trim();
      compt++;   
      
    })
    
    //myTab.forEach(ele => console.log(ele)); //there is a problem with the display
    //console.log(repHtml('div.poi_card-display-title').text());
    if(where==39)
    {
      cb(myTab);
      resolve("Scraping restaurant finish")
    }
  })
  .catch(function(err){console.log(err)});


}

}
module.exports = scrapR;

const rp = require('request-promise');
const cheerio = require('cheerio');
//repHtml('body > div.jsSecondNav.will-stick > ul.jsSecondNavMain > li:nth-child(2) > a').each
var myMapTwoResto = new Map();
var myMapOneResto = new Map();
var where = 0;
var getResto = function (data, callback, resolve)
{
    data.forEach(element => {
     
        const url = element;
        //console.log(element);
        rp(url)
        .then(function(value){
          where++;
          console.log(where);
          
          //console.log(where);
              var repHtml = cheerio.load(value);
              var nameHotel ;
              var b = true;
              repHtml('h3.mainTitle2').each(function(i,element){
                nameHotel = repHtml(this).text().trim();
                
                //console.log(a);
              })
              
              
              repHtml('ul.jsSecondNavSub').each(function(i, element2){
                //console.log('Deux resto : ');
                
                var a = repHtml(this).text().trim();
                var newA = a.replace(/\s{2,}/gi,';');
                //console.log(newA);
                myMapTwoResto.set(nameHotel,newA);
                b=false
                if(where==150)
              {
                callback(myMapOneResto,myMapTwoResto);
                resolve("ok");
              }
                
              })
              if(b){
              repHtml('body > div.jsSecondNav.will-stick > ul.jsSecondNavMain > li:nth-child(2) > a').each(function(i,ele){
                //console.log('Un resto : ');
                var a = repHtml(this);
                //console.log(a.children().next().children().attr('href'));
                myMapOneResto.set(nameHotel,a.attr('href'))
                
                
              })
            }
              
              
            }).catch(function(err){
              where++;
              console.log(element)
                console.log(err.statusCode);
                if(where==150)
              {
                callback(myMapOneResto,myMapTwoResto);
                resolve("ok");
              }
            });
            
          })
}
module.exports = getResto;
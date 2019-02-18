
const rp = require('request-promise');
const cheerio = require('cheerio');
const XRegxp = require('xregexp');
var where = 0 ;


const url = 'https://www.relaischateaux.com/fr/france/baumaniere-hotel-spa-les-baux-de-provence';

        
        rp(url)
        .then(function(value){
            where++;
              var repHtml = cheerio.load(value);
             //console.log(repHtml);
             
              repHtml('ul.jsSecondNavSub').each(function(i, element){
                a = repHtml(this);
                var newA = a.text().trim();
                var newA2 = newA.replace(/\s{2,}/gi,';');
                var newA3 = newA2.split(';');
                
                console.log(newA2);
              })
              
                      repHtml('h3.mainTitle2').each(function(i, element){
                        var a = repHtml(this);
                        var newA = a.text().trim();
                        console.log('Le nom du resto est ' + newA);
                        
                      })
          }).catch(function(err){
              
              
                console.log(err);
            });
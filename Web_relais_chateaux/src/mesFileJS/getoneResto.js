rp(a.children().next().children().attr('href'))
                .then(function(value){
                      var repHtml = cheerio.load(value);
                      
                      repHtml('h3.mainTitle2').each(function(i, element3){
                        var a = repHtml(this);
                        var newA = a.text().trim();
                        //console.log('Le nom du resto est ' + newA);
                        myMap.set(nameHotel,newA);
                      })
                    }).catch((err)=>{
                      console.log(a.children().next().children().attr('href'))
                      console.log('err2')});
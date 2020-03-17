
//Fetching data from server

const fetch = require('node-fetch');
var set = require(__dirname + '/../setting/setting.js')

var server
 = {
    getdata: function serverData(link,gate) {

        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                if (gate == 'synonyms') {
                   // console.log(json[0])
                    if (json[0].relationshipType == 'synonym')
                    {
                        console.log("SYNONYMS =")
                        console.log(json[0].words)
                    }
                    
                    else {
                        console.log("SYNONYMS OF THE GIVEN WORD =")
                        console.log(json[1].words)
                        }
                }
                else if (gate == 'antonyms')
                {

                    if (json[0].relationshipType == 'antonym')
                    {
                        console.log("ANTONYM OF OF THE GIVEN WORD")
                      console.log(json[0].words)
                        }
                        
                    else {

                        console.log("ANTONYM NOT AVAILABLE OF THIS WORD")
                         }
                    }
                else if (gate == 'definition')
                {

                    console.log(json)
                  }
                else if (gate == 'example')
                {

                    console.log(json)
                }
                else if (gate == '')
                {
                   
                        
                    data = json
                    if (data == '')
                    {

                        console.log("no")
                    }
                    else {
                        console.log("SYNONYM AND ANTONYM OF RANDOM WORD")
                        console.log(json)

                       }
                   
                }
                else {

                    console.log("WRITE PROPER COMMAND TO GET OUTPUT")
                     }

                
            });
    },

    defdata: function definition(url1,gate) {

        fetch(url1)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                if(gate=='')
                console.log(json)
            });
    },

    exdata: function example(url2,gate) {

        fetch(url2)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                if (gate == '')

                    console.log(json)
                

            });
    },





}

module.exports = server

   


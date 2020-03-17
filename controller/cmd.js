const fetch = require('node-fetch');
var SER = require(__dirname + '/../JSON/server.js')
var set = require(__dirname + '/../setting/setting.js')
var message = require(__dirname + '/../message/message.js')


var cmd = require('commander')



//var READLINE = require('readline');

function Routes(data) {
    // console.log("inside routes")
    
    const value = data.split(' ');
    var cmd1 = value[0];
    var cmd2 = value[1];
    var word = value[2];
    var gate = '';

    if (cmd1 == set.APP && cmd2 == set.COMMANDS.DEFINITIONS) {
        var link = set.apihost + word + set.def + set.apikey
        gate = 'definition'
        SER.getdata(link, gate)
    }
    else if (cmd1 == set.APP && cmd2 == set.COMMANDS.EXAMPLES) {
        var link = set.apihost + word + set.ex + set.apikey
        gate = 'example'
        SER.getdata(link, gate)
    }

    else if (cmd1 == set.APP && cmd2 == set.COMMANDS.SYNONYMS) {
        gate = 'synonyms'
        var link = set.apihost + word + set.related + set.apikey
        SER.getdata(link, gate)

    }

    else if (cmd1 == set.APP && cmd2 == set.COMMANDS.ANTONYMS) {
        var link = set.apihost + word + set.related + set.apikey
        gate = 'antonyms'
        SER.getdata(link, gate)
    }
    else if (cmd1 == set.APP && cmd2 != null && word == null) {
        word = cmd2
        var link = set.apihost + word + set.related + set.apikey
        var url1 = set.apihost + word + set.ex + set.apikey
        var url2 = set.apihost + word + set.def + set.apikey

        gate = ''
        SER.getdata(link, gate)
        SER.defdata(url2, gate)
        SER.exdata(url1, gate)

    }
    else if (cmd1 == set.APP && cmd2 == null && word == null) {

        var link1 = set.random + set.apikey
        fetch(link1)
            .then((response) => {
                return response.json();
            })
            .then((json) => {

                random = json.id
                console.log("RANDOM WORD = " + random)
                gate = ''

                var link = set.apihost + random + set.related + set.apikey
                var url1 = set.apihost + random + set.ex + set.apikey
                var url2 = set.apihost + random + set.def + set.apikey

                SER.getdata(link, gate)
                SER.defdata(url2, gate)
                SER.exdata(url1, gate)

            });

    }
   
      else {

        console.log(" Enter  Correct Command Here")
        
      }
  
  
}
    

module.exports=Routes








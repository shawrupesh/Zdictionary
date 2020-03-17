
var CMD = require(__dirname + '/./controller/cmd.js')
var message = require(__dirname+ '/./message/message.js')
var READLINE = require('readline');

//INTERFACE TO INTERACT WITH USER

var inputInterface = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'DICTIONARY> '
});

console.log(message.HELP_MESSAGE)
inputInterface.on('line', (line) => {
    
   CMD(line.trim());

    inputInterface.prompt();
});

// TO EXIT FROM APP(cntrl+c)
inputInterface.on('SIGINT', () => {
    inputInterface.question('Are you sure you want to exit app? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) inputInterface.pause();
    });

});

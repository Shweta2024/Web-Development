const fs = require('fs');

//creates file & add data to it if file doesn't priorly exists
//if file exists,then data gets overwritten
fs.writeFileSync('text.txt', 'I am shweta.');


//appends data in the specified file
fs.appendFileSync('text.txt', 'I am a backend developer.');
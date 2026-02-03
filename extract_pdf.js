const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Final Product list.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
});

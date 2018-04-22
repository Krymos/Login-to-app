const fs = require('fs');
const jwt = require('jsonwebtoken');

function template() {
    return fs.readFileSync('hello.html', 'utf8', function (err, data) {
        if (err) {
            return 'Не нашелся файл!';
        } else {
            return data;  
        }
    }) 
}

function createToken() {
    var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'foobar'
      }, 'secret');
      
    return token;
}

module.exports.createToken = createToken;
module.exports.template = template;
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./databs');
const helpers = require('./helpers');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    users.forEach(user => {
        if (req.body.login == user.login && req.body.password == user.password) {
            let template = helpers.template();
            res.send({token: user.token, login: user.login, data: template});
            return;
        }   
    });
    res.send({token: null, login: null, error: 'Чужой!'});
}) 

app.listen(3000, () => {
    console.log('listening on *:3000');
  });

let helpers = require('./helpers');

let users = [];

for (let i = 0; i < 10; i++) {
    let user = {
        login: "UserName"+i,
        password: "Password"+i,
        token: helpers.createToken()
    }
    users.push(user);
}

module.exports = users;
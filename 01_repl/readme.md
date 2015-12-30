# 01 repl 

To try sequelize api in node repl

## Env

- Node 5.3.0

## Getting started

```sh
$ npm install

# into repl
$ node

```

```javascript
// in node repl

const models = require('./repl');
const User = models.User;

// create user
User.create({
    firstName: 'Yamada', 
    lastName: 'Tarou'
}).then((user) => console.log(JSON.stringify(user)));

// find users
User.findAll().then((users) => console.log(JSON.stringify(users)));

```

- other methods
    - http://docs.sequelizejs.com/en/latest/api/model/

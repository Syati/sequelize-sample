const models = require('./models');

models.sequelize.sync({force:true}).then(() => {
  console.log("DEV DATA CREATED SUCCESSFULLY");
});

module.exports = models;


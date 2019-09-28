const mongoose = require('mongoose');

module.exports = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.DSN, {useNewUrlParser: true});
  mongoose.connection.on('error', reject);
  mongoose.connection.once('open', resolve);
});
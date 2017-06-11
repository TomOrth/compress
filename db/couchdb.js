const nano = require('nano');
const config = require('../config.json')
module.exports = nano(process.env.COUCHDB_URL || config.couch);  

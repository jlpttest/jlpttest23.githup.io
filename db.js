const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('testdb.json');
const db = low(adapter);
// Set some defaults
db.defaults({ users: [] }).write();

module.exports = db;

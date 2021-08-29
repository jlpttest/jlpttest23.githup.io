const db = require('../db');
const shortid = require('shortid');

module.exports.index = function (req, res) {
    res.render('index', {user:db.get('users').value()});
};

module.exports.search = function (req, res) {
    var q = req.query.q;
    //console.log('/search ');
    var users = db.get('users').value();
    var matchedUsers = users.filter(function(user){
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('index', {user:matchedUsers, qResult: q});
    
};

module.exports.create = function (req, res) {
    res.render('user/create');
};

module.exports.searchById = function (req, res) {
    //console.log('req.path');
    var id = req.params.id;
    var user = db.get('users').find({id : id}).value();
    res.render('user/view', {name : user.name});
};

module.exports.createPost = function (req, res) {
    req.body.id = shortid.generate();
    db.get('users').push( req.body).write();
    res.redirect('/user');
};
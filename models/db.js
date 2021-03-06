var mongoose = require('mongoose');
var mongoURL = require('../util/config').getAll().dbUrl;

/************************** DB Connection ******************************/
console.log('mongoURL' + mongoURL);
// 程序启动后通过mongoose进行连接db的操作
mongoose.connect(mongoURL, function(err) {
  if (err) {
    console.error('connect to %s error: ', err.message);
    process.exit(1);
  }
});

// 连接db成功时
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + mongoURL);
});

// 连接db出错时
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

// db失去连接
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

//程序终止后断开
process.on('SIGNIT', function() {
  mongoose.connection.close(function() {
    console.log('db connection is off');
  });
  process.exit(0);
});

/********************  Modules import *******************************/
require('./article');
require('./user');
require('./authLog');
require('./admin');

exports.Article = mongoose.model('Article');
exports.User = mongoose.model('User');
exports.AuthLog = mongoose.model('AuthLog');
exports.Admin = mongoose.model('Admin');
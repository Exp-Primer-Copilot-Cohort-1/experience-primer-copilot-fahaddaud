//Create web server
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectID = require('mongodb').ObjectID;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sessionstore = require('sessionstore');
var sessionStore = sessionstore.createSessionStore();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var jwt = require('jsonwebtoken');
var jwtSecret = 'zxcvbnm';
var cors = require('cors');
var request = require('request');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./config');
var stripe = require('stripe')(config.stripe.secretKey);
var stripePublicKey = config.stripe.publicKey;
var stripeSecretKey = config.stripe.secretKey;
var stripe = require("stripe")(stripeSecretKey);
var async = require('async');
var crypto = require('crypto');
var moment = require('moment');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = require('./models/user');
var Comment = require('./models/comment');
var Skill = require('./models/skill');
va 
function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skill-member.html'
  }
}
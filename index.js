// Node.js has an event-oriented paradigm
//It follows the same event-oriented philosophy on the Javascript client side
// The event-loop is the agent responsible fr noticing and emitting events


const express = require('express');
const  consign = require("consign");
const app = express();


// using the consign module/package
consign()
    .include('libs/config.js')
    .then("db.js") // models
    .then('auth.js')
    .then("libs/middlewares.js") // app middleware
    .then("routes") // routes
    .then("libs/boot.js") // bootstraping the app
    .into(app);

module.exports = app;

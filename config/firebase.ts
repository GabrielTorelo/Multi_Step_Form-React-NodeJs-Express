import admin from "firebase-admin";

const config = require('./config')

module.exports = admin.initializeApp(config.firebaseConfig);
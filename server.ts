'use strict'
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

const config = require('./config/config')
const app = express()

app.use(express.static("static"));
app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('GET request API')
})

app.listen(config.port, () => { console.log(`Server started on http://localhost: ${config.port}`) })
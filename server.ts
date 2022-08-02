import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes"

const config = require('./config/config')
const app = express()

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(config.port, () => { console.log(`Server started on http://localhost: ${config.port}`) })

/**
 * `npm start` startar o nodemon
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/** PRODUÇÃO */
// app.use(cors({
//   origin: 'http://meuapp.com'
// }));

/** DESENVOLVIMENTO */
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
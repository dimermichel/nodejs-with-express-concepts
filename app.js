const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

//const server = http.createServer(app);
//server.listen(process.env.PORT); app.listen shorten the createServer method

app.listen(process.env.PORT);
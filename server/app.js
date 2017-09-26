const express = require('express'),
    dotenv = require('dotenv').config(),
    helmet = require('helmet'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('this is the server page');
});

app.listen(process.env.PORT || 4700, () => {
    console.log('the server has started on port 4700');
});
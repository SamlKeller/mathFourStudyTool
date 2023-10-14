import { } from 'dotenv/config';

import express from 'express';
import path from 'path';
import request from 'request';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname + '../static')));
app.use(express.static('static'));
app.use(express.static('static/css'));
app.use(express.static('static/images'));


app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/trigIdentities', (req, res) => {
    res.render('trigIdentities');
});


app.listen(3000 || process.env.PORT);
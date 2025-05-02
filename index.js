import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import bodyParser from 'body-parser';
import cors from 'cors';

import virtualRoute from './routes/virtualRoute.js';



dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("main");
    })

    app.use('/CJ', virtualRoute);

app.listen(PORT, () => console.log('Listening on port ${PORT}'.bgGreen.white));


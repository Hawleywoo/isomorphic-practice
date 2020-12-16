import express from 'express';
import yields from 'express-yields';
import fs from 'fs-extra';
import webpack from 'webpack';
import { argv } from 'optimist';
import { get } from 'request-promise';
import { delay } from 'redux-saga'
import { questions, question } from '../data'

const useLiveData = argv.useLiveData === 'true'

function * getQuestions(){
    let data;
    if(useLiveData){
        data = yield get(questions, {gzip:true})
    }
}
if(process.env.NODE_ENV === 'development'){
    const config = require('../webpack.config.dev.babel').default;
    const cmpiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo:true
    }));

    app.use(require('webpack-hot-middleware')(compiler))
}

const port = process.env.PORT || 3000;
const app = express();

app.get(['/'], function * (req,res){
    let index = yield fs.readFile('./public/index.html', "utf-8");
    res.send(index);
});


app.listen(port, '0.0.0.0', ()=>console.info(`App listening on ${port}`));
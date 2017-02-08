/*
 * @Author: taoyage
 * @FileName: app.js 						   
 * @Date:   2017-02-07 17:43:20 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-08 01:17:24 	   
 */

'use strict';

import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

//================请求体解析====================
import bodyParser from 'body-parser';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//=================加载路由=====================
import Router from './router';
Router(app);

app.listen(3000, () => {
    console.log(`server running in http://localhost:3000`);
})

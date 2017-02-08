/*
 * @Author: taoyage
 * @FileName: home.js 						   
 * @Date:   2017-02-07 22:42:27 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-07 23:57:50 	   
 */

'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
	fs.readFile(path.resolve(__dirname,'../mock/home.json'),'utf-8',(err,data)=>{
		if(err){
			return res.json(err);
		}
		res.end(data);
	});
});

export default router;

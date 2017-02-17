/*
 * @Author: taoyage
 * @FileName: rank.js 						   
 * @Date:   2017-02-13 02:43:40 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-13 02:48:02 	   
 */

'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/',(req,res)=>{
	fs.readFile(path.resolve(__dirname, '../mock/rank.json'),'utf-8',(err,data)=>{
		if(err){
			return res.json(err);
		}
		res.end(data);
	})
})

export default router;
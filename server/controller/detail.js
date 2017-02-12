/*
 * @Author: taoyage
 * @FileName: detail.js 						   
 * @Date:   2017-02-12 12:54:02 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-12 13:04:35 	   
 */

'use strict';
import express from 'express';
import fs from 'fs';
import path from 'path';
const router = express.Router();

router.get('/:id', (req, res) => {

	let id = req.params.id;

    fs.readFile(path.resolve(__dirname, `../mock/book/${id}.json`), 'utf-8', (err, data) => {
        if (err) {
            return res.json(err);
        }
        res.end(data);
    });
});

export default router;
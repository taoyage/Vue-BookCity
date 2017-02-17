/*
 * @Author: taoyage
 * @FileName: router.js 						   
 * @Date:   2017-02-07 17:43:30 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-13 02:43:38 	   
 */

'use strict';
import home from './controller/home';
import detail from './controller/detail';
import rank from './controller/rank';

export default (router) => {
	router.use('/api/home',home);
	router.use('/api/detail',detail);
	router.use('/api/rank',rank);
}
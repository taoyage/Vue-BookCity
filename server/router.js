/*
 * @Author: taoyage
 * @FileName: router.js 						   
 * @Date:   2017-02-07 17:43:30 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-12 12:54:38 	   
 */

'use strict';
import home from './controller/home';
import detail from './controller/detail';

export default (router) => {
	router.use('/api/home',home);
	router.use('/api/detail',detail);
}
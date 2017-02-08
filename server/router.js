/*
 * @Author: taoyage
 * @FileName: router.js 						   
 * @Date:   2017-02-07 17:43:30 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-07 23:53:41 	   
 */

'use strict';
import home from './controller/home';

export default (router) => {
	router.use('/api/home',home);
}
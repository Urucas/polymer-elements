/*  important!!!
 *  npm install conect
 */

var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8081);

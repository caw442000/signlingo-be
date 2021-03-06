/*
** This file and the folder that it is in was generated by the
** Node Package dukeapi found at: https://www.npmjs.com/package/dukeapi
**
** Version: 1.0.0
** Author: David H. Isakson II
** License: MIT
** Github: https://github.com/ikeman32/duke-api-wauth
** Contact: david.isakson.ii@gmail.com
*/
require("dotenv").config();

const knex = require("knex");
    
const knexConfig = require("../knexfile.js");

const environment = process.env.DB_ENV;

module.exports = knex(knexConfig[environment]);
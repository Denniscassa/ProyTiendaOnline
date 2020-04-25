/**
 * Nombre       : Cassa Lipa Dennis
 * fecha        : 24-04-2020
 * descripcion  : coneccion DB
 */

const mysql= require('mysql');

const pool = mysql.createPool({
    connectionLimit:3,
    host:'127.0.0.1',
    user: 'root',
    password:'',
    database:'db_almacen'
});

module.exports=pool;

var express = require('express');
var router = express.Router();

/**variables */
let alamcen = [
    {
        id: 'A0001', codigo: 'P-H-CRE-MC-J', producto: 'pantalon', genero: 'hombre', marca: 'cresspo', modelo: 'coreano', tipo: 'jeans', stock: 15, colores: 'todos',
        precio: 95.50, descripcion: 'Pantalon cresspo, modelo slim(delgado), de varios colores, tela jeans',

    },
    {
        id: 'A0002',
        codigo: 'P-H-CYE-PN-TD',
        producto: 'pantalon',
        genero: 'hombre',
        marca: 'CYZ conyuzeo',
        modelo: 'nacional',
        tipo: 'drill',
        stock: 12,
        colores: 'todos',
        precio: 135.00,
        descripcion: 'Pantalon CYZ- tela drill-bolsillo ciego con tapa-modelo skater- bota pie pretinado-cintira pretinado',

    },
    {
        id: 'A0003',
        codigo: ' P-H-H-PC-T',
        producto: 'pantalon',
        genero: 'hombre',
        marca: 'Hongdoushan',
        modelo: 'coreano',
        tipo: 'tela',
        stock: 15,
        colores: 'todos',
        precio: 95.50,
        descripcion: 'Pantalon Hongdoushan, tela, semi pitillo,bolsillo ciergo, modelo clasico',
    }
]

const conn = require('../bin/DBconection');
/* GET alamcen page. 
router.get('/', function (req, res, next) {
    res.render('almacen', { title: 'almacenExpress', datosproducto:alamcen});
});*/

router.get('/', function (req, res, next) {

    conn.getConnection((err, conexion) => {
        if (err) {
            console.log('Error de conexion')
            res.send('error de conexion')
        }
        else {
            sql = 'SELECT * FROM cliente'
            conn.query(sql, (err, resultado) => {
                if (err) {
                    console.log('Error en consulta')
                    res.send('error en consulta')
                } else {
                    console.log(resultado)
                    res.render('almacen', { title: 'almacenExpress', datos: resultado });
                }
            })
        }
    })
});

module.exports = router;

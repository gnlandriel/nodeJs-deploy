const db = require('../db/db');

const getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM producto;'
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
}

const getProductsById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM producto WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

const createProduct = (req, res) => {
    const {nombre, precio, idcategoria} = req.body;
    const sql = 'INSERT INTO producto (nombre, precio, idcategoria) VALUES (?, ?, ?)';
    db.query(sql, [nombre, precio, idcategoria], (err, results) => {
        if (err) throw err;
        res.json({message: 'Producto creado', idproducto: results.insertId});
    });
}

const updateProduct = (req, res) => {
    const {id} = req.params;
    const {nombre, precio, idcategoria} = req.body;
    const sql = 'UPDATE producto SET nombre = ?, precio = ?, idcategoria = ? WHERE id = ?';
    db.query(sql, [nombre, precio, idcategoria, id], (err, result) => {
        if(err) throw err;
        res.json({mensaje: 'Producto modificado'});
    });
}


const deleteProduct = (req, res) => {
    const {id} = req.params;   
    const sql = 'DELETE FROM producto WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        res.json({mensaje: 'Producto eliminado'});
    });
}

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
}


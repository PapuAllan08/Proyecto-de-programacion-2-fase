import { getConnection } from '../Database/connection.js';
import sql from 'mssql';

export const getProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM productos');
    res.json(result.recordset);
};

export const getProduct = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID_producto", sql.Int, req.params.ID_producto)
        .query('SELECT * FROM productos WHERE ID_producto = @ID_producto');
    
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.json(result.recordset[0]);
};

export const createProduct = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('Nombre_vehiculo', sql.VarChar, req.body.Nombre_vehiculo)
        .input('precio', sql.Int, req.body.precio)
        .input('Descripcion', sql.VarChar, req.body.Descripcion)
        .input('Cantidad_disponible', sql.Int, req.body.Cantidad_disponible)
        .query('INSERT INTO productos (Nombre_vehiculo, precio, Descripcion, Cantidad_disponible) VALUES (@Nombre_vehiculo, @precio, @Descripcion, @Cantidad_disponible); SELECT SCOPE_IDENTITY() AS Id');

    res.json({
        ID_producto: result.recordset[0].Id,
        Nombre_vehiculo: req.body.Nombre_vehiculo, 
        precio: req.body.precio, 
        Descripcion: req.body.Descripcion, 
        Cantidad_disponible: req.body.Cantidad_disponible
    });
};

export const updateProduct = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID_producto", sql.Int, req.params.ID_producto)
        .input('Nombre_vehiculo', sql.VarChar, req.body.Nombre_vehiculo)
        .input('precio', sql.Int, req.body.precio)
        .input('Descripcion', sql.VarChar, req.body.Descripcion)
        .input('Cantidad_disponible', sql.Int, req.body.Cantidad_disponible)
        .query('UPDATE productos SET Nombre_vehiculo = @Nombre_vehiculo, precio = @precio, Descripcion = @Descripcion, Cantidad_disponible = @Cantidad_disponible WHERE ID_producto = @ID_producto');

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto actualizado" });
};

export const deleteProduct = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID_producto", sql.Int, req.params.ID_producto)
        .query("DELETE FROM productos WHERE ID_producto = @ID_producto");

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.json({ message: "Producto borrado" });
};

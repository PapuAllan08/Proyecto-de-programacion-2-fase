import {getConnection} from '../Database/connection.js'
import sql from 'mssql'

//get esta completamente bien
export const getProducts = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('select * from productos')
    res.json(result.recordset)
} 
//completamente bien
export const getProduct = async (req, res) =>{
    console.log(req.params.ID_producto)
//aqui hay un error con el id, revisar
    const pool = await getConnection()
   const result = await pool
    .request()
    .input("ID_producto", sql.Int, req.params.ID_producto)
    .query('SELECT * FROM productos where ID_producto = @ID_producto')
    
if(result.rowsAffected[0] === 0) {              
    return res.status(404).json({ message: "producto no encontrado"})
}
return res.json(result.recordset[0])
}


/*basicamente es todo sobre añadir(create) todos los produsctos*/
export const createProduct = async (req, res) => {
    console.log(req.body)

    
    const pool = await getConnection()
    const result = await pool
    .request()//esta se encarga de guardar todo lo escrito en backend dentro de la base de datos
    .input('Nombre_vehiculo', sql.VarChar, req.body.Nombre_vehiculo)
    .input('precio', sql.Int, req.body.precio)
    .input('Descripcion', sql.VarChar, req.body.Descripcion)
    .input('Cantidad_disponible', sql.Int, req.body.Cantidad_disponible)
    .query('INSERT INTO productos (Nombre_vehiculo, precio, Descripcion, Cantidad_disponible) VALUES ( @Nombre_vehiculo, @precio, @Descripcion, @cantidad_disponible); SELECT SCOPE_IDENTITY() AS Id');
    console.log(result)
    
    res.json({
        ID_producto: result.recordset[0].ID_producto,
        Nombre_vehiculo: req.body.Nombre_vehiculo, 
        precio: req.body.precio, 
        Descripcion: req.body.Descripcion, 
        Cantidad_disponible: req.body.Cantidad_disponible
    })
}

export const updateProduct = async (req, res) => {

const pool = await getConnection()
const result = await pool
.request()
    .input("ID_producto", sql.Int, req.params.ID_producto)
    .input('Nombre_vehiculo', sql.VarChar, req.body.Nombre_vehiculo)
    .input('precio', sql.Int, req.body.precio)
    .input('Descripcion', sql.VarChar, req.body.Descripcion)
    .input('Cantidad_disponible', sql.Int, req.body.Cantidad_disponible)
.query('update productos set Nombre_vehiculo = @Nombre_vehiculo, precio = @precio, Descripcion = @Descripcion, Cantidad_disponible = @Cantidad_disponible where ID_producto = @ID_producto')
console.log(result)

if(result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "producto no encontrado"})
}
res.json({
    ID_producto: result.recordset[0].ID_producto,
    Nombre_vehiculo: req.body.Nombre_vehiculo, 
    precio: req.body.precio, 
    Descripcion: req.body.Descripcion, 
    Cantidad_disponible: req.body.Cantidad_disponible
})
}

export const deleteProduct = async (req, res) => {
    

   const pool = await getConnection()
   const result = await pool.request()
   .input("ID_producto", sql.Int, req.params.ID_producto)
   .query("DELETE FROM productos where ID_producto = @ID_producto")

   console.log(result)

   if(result.rowsAffected[0] === 0) {
    return res.starus(404).json({ message: "producto no encontrado" })
   }
   return res.json({ message: "producto borrado"})
}
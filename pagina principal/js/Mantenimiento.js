// aca agarra los elementos
const form = document.getElementById("producto-form");
const modeloInput = document.getElementById("modelo");
const marcaInput = document.getElementById("marca");
const descripcionInput = document.getElementById("descripcion");
const precioInput = document.getElementById("precio");
const indexInput = document.getElementById("index");
const listaProductos = document.getElementById("producto-lista");
// crea el evento
document.addEventListener("DOMContentLoaded", cargarProductos);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const modelo = modeloInput.value.trim()
    const marca = marcaInput.value.trim()
    const descripcion = descripcionInput.value.trim()
    const precio = precioInput.value.trim()
    const index = indexInput.value

    if (index === "") {
        agregarProducto({ modelo, marca, descripcion, precio })
    } else {
        actualizarProducto(index, { modelo, marca, descripcion, precio });
    }

    form.reset();
    indexInput.value = ""
    cargarProductos();
});
// agrega los productos
function agregarProducto(producto) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto)
    localStorage.setItem("productos", JSON.stringify(productos))
}
function cargarProductos() {

    const productos = JSON.parse(localStorage.getItem("productos")) || [];

    listaProductos.innerHTML = "";

    productos.forEach((producto, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.modelo}</td>
            <td>${producto.marca}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td><td>
                <button onclick="editarProducto(${index})" class="butoto">Editar</button>
                <button onclick="eliminarProducto(${index})" class="butoto">Eliminar</button>
            </td>
        `;
        listaProductos.appendChild(fila);
    });
}
// edita la info
function editarProducto(index) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    const producto = productos[index];
    modeloInput.value = producto.modelo
    marcaInput.value = producto.marca;
    descripcionInput.value = producto.descripcion;
    precioInput.value = producto.precio
    indexInput.value = index;
}
// aca actualiza la info

function actualizarProducto(index, nuevoProducto) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    productos[index] = nuevoProducto;
    localStorage.setItem("productos", JSON.stringify(productos))
}
// funcion para eliminar productos
function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    productos.splice(index, 1)
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarProductos();
}
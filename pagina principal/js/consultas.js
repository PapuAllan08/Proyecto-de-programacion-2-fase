document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consulta-formu');
    const consultaLista = document.getElementById ('consulta')
    const errorlabel = document.createElement('p');
    errorlabel.classList.add('error')
    errorlabel.textContent = 'completa el formualrio correctamente';
    consultaForm.appendChild(errorlabel)


    //este carga las consultas almacenadas al localstorage
    cargarConsultas();

    consultaForm.addEventListener("submit", function(event){
    event.preventDefault();           
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim()
        const mensaje = document.getElementById('mensaje').value.trim();

        // Valida todos los campos
        if (nombre && correo && mensaje && validarCorreo(correo)){
            errorlabel.style.display = 'none';
            agregarConsulta(nombre, correo, mensaje);
            consultaForm.reset();
        } else {
            errorlabel.style.display = 'block'; 
        }
    });

function validarCorreo(correo){

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    return regexCorreo.test(correo);
}


    // Agregar consulta a la página y guardarla en el LocalStorage
    function agregarConsulta(nombre, correo, mensaje){
        const consulta = {
            nombre: nombre,
            correo: correo,
            mensaje: mensaje
        };
        
        // Mostrar la consulta en la interfaz
        const nuevaConsulta = document.createElement("div");
        nuevaConsulta.classList.add("consulta")
        nuevaConsulta.innerHTML = `
        <h4>${consulta.nombre} (${consulta.correo})</h4>
            <p>${consulta.mensaje}</p>
        `;
        consultaLista.prepend(nuevaConsulta);

        // Guardar la consulta en LocalStorage
        guardarConsulta(consulta);
    }

    // Guardar las consultas en LocalStorage
    function guardarConsulta(consulta) {
        let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
        consultas.push(consulta);
        localStorage.setItem('consultas', JSON.stringify(consultas));
    }

    // Cargar las consultas guardadas desde LocalStorage
    function cargarConsultas(){
        const consultas = JSON.parse(localStorage.getItem('consultas')) || [];
        consultas.forEach(({nombre, correo, mensaje}) => agregarConsulta(nombre, correo ,mensaje));
    }

});
document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consulta-formu');
    const consultaLista = document.getElementById('consulta');
    const errorlabel = document.createElement('p');
    errorlabel.classList.add('error');
    errorlabel.textContent = 'Le pido que complete todos los datos';
    consultaForm.appendChild(errorlabel);

    // sirve oara cargar las consultas
    cargarConsultas();

    consultaForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar los campos
        if (nombre && correo && mensaje && validarCorreo(correo)){
            errorlabel.style.display = 'none';
            agregarConsulta(nombre, correo, mensaje);
            consultaForm.reset();
        } else {
            errorlabel.style.display = 'block'; 
        }
    });

    function validarCorreo(correo){
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };
    
})
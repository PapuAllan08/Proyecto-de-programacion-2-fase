document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consulta-formu');
    const consultaLista = document.getElementById('consulta');
    const errorlabel = document.createElement('p');
    errorlabel.classList.add('error');
    errorlabel.textContent = 'Completa todos los datos correctamente';
    consultaForm.appendChild(errorlabel);

cargarConsultas();

consultaForm.addEventListener('submit', (e) => {
  e.preventDefault();
    
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre && correo && mensaje && validarCorreo(correo)){
  errorlabel.style.display = 'none';
  agregarConsulta(nombre, correo, mensaje);

  consultaForm.reset();
}else {
    errorlabel.style.display = 'block'; 
}
});


function validarCorreo(correo){
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}


    function agregarConsulta(nombre, correo, mensaje) {
    const consulta   = document.createElement('div');
    consulta.classList.add('consulta');
    
    const consultaNombre = document.createElement('h4');
    consultaNombre.textContent = nombre;

    const consultaCorreo = document.createElement('p');
    consultaCorreo.textContent = `Correo: ${correo}`;

    const consultaMensaje = document.createElement('p');
    consultaMensaje.textContent = mensaje;

    consulta.appendChild(consultaNombre);
    consulta.appendChild(consultaCorreo);
    consulta.appendChild(consultaMensaje);
    consulta.appendChild(consulta);

    guardarConsulta({ nombre, correo, mensaje });
};

function guardarConsulta(consulta){
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultas.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(consultas));
}

function cargarConsultas() {
    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultas.forEach(({ nombre, correo, mensaje }) => agregarConsulta(nombre, correo, mensaje));
}
}) 
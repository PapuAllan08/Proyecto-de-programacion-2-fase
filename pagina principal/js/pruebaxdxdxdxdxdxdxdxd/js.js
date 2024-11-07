let ar = [];

function comprobar() { 
    let nombre = document.getElementById('nime').value;
    let contra = document.getElementById('contra').value;
    let contrrrr = document.getElementById('cont2').value;

    if (nombre === "" || contra === "" || contrrrr === "") {
        alert("Por favor, ingrese toda la información.");
    } else if (contra !== contrrrr) {
        alert("Las contraseñas no coinciden.");
    } else {
        ar.push({nombre: nombre, contraseña: contra});
        alert("Usuario registrado correctamente.");
        document.getElementById('nime').value = "";
        document.getElementById('contra').value = "";
        document.getElementById('cont2').value = "";
    }
}

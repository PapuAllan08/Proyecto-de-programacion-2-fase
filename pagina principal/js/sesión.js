document.body.style.overflow = 'hidden';
let clientes = [];

function registrarCliente() {
  try {
    let nombreusuario = document.getElementById("nombreusuario").value
    let contraseña = document.getElementById("contraseña").value
    let ClienteExis = clientes.some(
      (clientes) =>
        clientes.nombreusuario === nombreusuario
    );
    if (nombreusuario === "" || contraseña === "") {
      alert("Por favor, complete la información solicitada")
    } else {
      alert("Completado")
      clientes.push({
        nombreusuario: nombreusuario,
        contraseña: contraseña,
        
      });
    }
  } catch (error) {
    console.error("Ocurrió un error en el proceso de registro:", error.message)
    alert(
      "Hubo un problema al registrar el cliente. Por favor, intenta más tarde."
    )
  }
}

function redirección (){
  window.location.href = "/pagina principal/registropru.html"
}
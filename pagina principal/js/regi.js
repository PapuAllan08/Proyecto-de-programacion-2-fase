document.body.style.overflow = "hidden";
let clientes = [];

function registrarCliente() {
  try {
    let nombreusuario = document.getElementById("nombreusuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let email = document.getElementById("email").value;
    let ClienteExis = clientes.some(
      (clientes) =>
        clientes.nombreusuario === nombreusuario || clientes.email === email
    );
    if (nombreusuario === "" || contraseña === "" || email === "") {
      alert("Por favor, complete la información solicitada");
    } else {
      alert("Completado");
      clientes.push({
        nombreusuario: nombreusuario,
        contraseña: contraseña,
        email: email,
      });
    }
  } catch (error) {
    console.error("Ocurrió un error en el proceso de registro:", error.message);
    alert(
      "Hubo un problema al registrar el cliente. Por favor, intenta más tarde."
    );
  }
}

function redirección (){
  window.location.href ="/pagina principal/iniciar.html"
}
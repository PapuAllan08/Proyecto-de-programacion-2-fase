let clientes = []

  function registrarCliente() {
    let nombreusuario = document.getElementById("nombreusuario").value
    let contraseña = document.getElementById("contraseña").value
    let email = document.getElementById("email").value
    let ClienteExis = clientes.some(clientes => clientes.nombreusuario === nombreusuario || clientes.email === email);
    if (nombreusuario === "" || contraseña === "" || email === "") {
      alert("Por favor, complete la información solicitada");
    } else {
        let ClienteExis = clientes.some(clientes => clientes.nombreusuario === nombreusuario || clientes.email === email);
        if (ClienteExis) {
            alert("El nombre de usuario ya está registrado. Por favor, elija otro.");
          } else {
      alert("Completado")
      clientes.push({
        nombreusuario: nombreusuario,
        contraseña: contraseña,
        email: email,
      })

      
    }
    }
    }
    




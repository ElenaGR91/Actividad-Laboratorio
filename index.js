// Validación de campos obligatorios
document.getElementById("formulario").addEventListener("submit", function(event) {
    let camposObligatorios = this.querySelectorAll("[required]");
    let esValido = true;
  
    for (let i = 0; i < camposObligatorios.length; i++) {
      let campo = camposObligatorios[i];
  
      if (!campo.value) {
        esValido = false;
        campo.style.border = "1px solid red";
      } else {
        campo.style.border = "";
      }
    }
  
    if (!esValido) {
      event.preventDefault();
    }
  });
  
  // Validación del campo nombre
  let nombre = document.getElementById("nombre");
  let imagen_veri = document.getElementById("tick");
  let imagen_inco = document.getElementById("x");
  
  nombre.addEventListener("input", function() {
    if (!this.value.match(/^[a-zA-Z]+$/)) {
      this.setCustomValidity("Solo se permiten letras");
      this.style.border = "1px solid red";
      tick.style.display = "none";
      x.style.display = "inline-block";
    } else {
      this.setCustomValidity("");
      this.style.border = "1px solid green";
      tick.style.display = "inline-block";
      x.style.display = "none";
    }
  });
  
  // Validación del campo email
  let email = document.getElementById("email");
  let tick = document.getElementById("tick");
  let x = document.getElementById("x");
  
  email.addEventListener("input", function() {
    if (!this.checkValidity()) {
      this.style.border = "1px solid red";
      tick.style.display = "none";
      x.style.display = "inline-block";
    } else {
      this.style.border = "1px solid green";
      tick.style.display = "inline-block";
      x.style.display = "none";
    }
  });
  
  // Mensaje de error para campos no rellenos
  let form2 = document.getElementById("miFormulario");
  let mensaje2 = document.getElementById("mensaje2");
  
  form2.addEventListener("submit", function(event)); {
    let inputs = this.elements;
    let relleno = true;
  
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        relleno = false;
        inputs[i].style.border = "1px solid red";
      } else {
        inputs[i].style.border = "";
      }
    }
  }
  
    if (!relleno) {
      event.preventDefault();
      mensaje.style.display = "block";
      mensaje.innerHTML = "Rellene este campo";
    }
  

//Validacion de los campos de contraseñas


formulario.addEventListener("submit", function(event) {
  let user_pass = document.getElementById("user_pass").value;
  let user_pass2 = document.getElementById("user_pass2").value;

  if (user_pass !== user_pass2) {
    event.preventDefault();
    mensaje.style.display = "block";
    mensaje.innerHTML = "Las contraseñas no coinciden";
  } else {
    mensaje.style.display = "none";
  }
});

//Validacion de casillas rellenas
let formulario = document.getElementById("miFormulario");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
  let input = formulario.elements[0];

  if (!input.value) {
    event.preventDefault();
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
});
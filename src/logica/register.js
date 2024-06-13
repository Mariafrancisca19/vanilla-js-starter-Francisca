
let nombre = document.getElementById("nombre")
let usuario = document.getElementById("correo")
let contrasena = document.getElementById("contra")
let btninicio = document.getElementById("inicio")
let btnInciarSesion = document.getElementById("atras")

import { guardarDatos } from "../Llamados/llamados"

btninicio.addEventListener("click", function () {

  guardarDatos(nombre.value, usuario.value, contrasena.value)
})

// funcion de direccionar pagina al login

let inicioSesion = document.getElementById("atras")
atras.addEventListener("click", function () {
  window.location.href = "../login.html"

})









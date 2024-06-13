let btn = document.getElementById("registrar")
import { obtenerDatos } from "../Llamados/llamados"
let bandera = false

let cambiar = document.getElementById("cambiar")

cambiar.addEventListener("click", async function () {


    window.location.href="register.html"

})

btn.addEventListener("click", async function () {
    let correo = document.getElementById("correo")
    let contrasena = document.getElementById("pass")
   

    let datos = await obtenerDatos()

   
    datos.forEach(usuario => {
        if (usuario.email ==  correo.value && usuario.password == contrasena.value) {
            alert("Todo bien")
            bandera = true
            
        }
        if (bandera) {
         
           
          
        }
    });

  

    if (bandera) {
        window.location.href="paginaPrincipal.html" 
    }
})
//funcion para obtener datos
/*let registar = document.getElementById("registrar")
registar.addEventListener("click",function() {
    window.location.href="paginaPrincipal.html"
    
})*/
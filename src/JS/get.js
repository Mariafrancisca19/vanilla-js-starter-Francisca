import { actualizar } from "./put"
import { contadorTareas } from ".."
import { eliminarTarea } from "./delete"
import Swal from 'sweetalert2'


let texto = document.getElementById("nada")

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 20000,
    timerProgressBar: true,
  })

/*METODO GET:Retorna todas las tareas*/
async function datos(){ 
    try {
      lista.innerHTML=""
      const respuesta = await fetch("http://localhost:3000/api/task")
      const datos = await respuesta.json() 
      let sinTaeras = Array.from(datos)
      datos.forEach(tarea=>{
        let p = document.createElement("li")
        p.classList.add("square")
        p.innerHTML=tarea.nombre

        if (sinTaeras.length==0) {
            texto.style.display= "block"
            
        } else { 
            texto.style.display="none"
            
        }
        
        let contenedor = document.createElement("div")
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        
        let lista = document.getElementById("lista")
        let botonEliminar = document.createElement("button") //Funcion para el boton elimiar
        botonEliminar.innerHTML = "🗑️"
        
        botonEliminar.addEventListener("click",async()=>{
          //FUNCION DELETE
          eliminarTarea(tarea.id)
          await Toast.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })    
          })
          
          checkBox.checked = tarea.estado
          if (checkBox.checked) {
            contadorTareas.value++
            }
            contenedor.classList.add("cont-tareas")
            contenedor.appendChild(checkBox)
            contenedor.appendChild(p)
            p.appendChild(checkBox)
            p.appendChild(botonEliminar)
            lista.appendChild(contenedor)
            
            checkBox.addEventListener("click", () =>{  //funcion para el contador
              if (checkBox.checked ==true) {
                actualizar(tarea.id)
                contadorTareas.value++
                } else {
                  contadorTareas.value--
                  }
                  })
                  
                  
                  
                  })
                  console.log(datos);
                  } catch (error) {
                    console.error(error);   
                    }
  }

  export {datos}
let ingresar = document.getElementById("ingresar");
let btnAgregar = document.getElementById("btn-agregar");
let lista = document.getElementById("lista");
export let contadorTareas = document.getElementById("contadorTarea");

import { eliminarTarea } from "./JS/delete.js";
import { actualizar } from "./JS/put.js"
import { datos } from "./JS/get.js";


                  datos()
        
                  
                  //METODO POST : Crea una tarea con el objeto,Se le pasa un objeto con los datos que se quieren agregar
                  
                  async function guardarDatos() {
                    try {
                      let tarea = {
                        id: Date.now(),
                        nombre: ingresar.value,
                        estado: false
                        } 
                        const respuesta = await fetch("http://localhost:3000/api/task",{
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(tarea)
        })
        let datosG = await respuesta.json()
        console.log(datosG);
        datos()
        location.reload()
        } catch (error) {
          console.error(error);
  }
  }

  
  
  
  
  /* FUNCION al darle enter que no se borre 
  Que si esta vacia la tarea no se agregue */  
  
  ingresar.addEventListener("keydown",(e) =>{
    if (e.key == "Enter" && ingresar.value!= "") {
      guardarDatos()
      }
      });
      
      btnAgregar.addEventListener("click", () => {
        if (ingresar.value!= "") {
          guardarDatos()
          }else{
            alert ("NO TIENE DATOS")
            }
            })

            
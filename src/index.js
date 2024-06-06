let ingresar = document.getElementById("ingresar");
let btnAgregar = document.getElementById("btn-agregar");
let lista = document.getElementById("lista");
let contadorTareas = document.getElementById("contadorTarea");
import { eliminarTarea } from "./JS/delete.js";
import { actualizar } from "./JS/put.js";


/*METODO GET:Retorna todas las tareas*/

async function datos(){
  try {
    lista.innerHTML=""
      const respuesta = await fetch("http://localhost:3000/api/task")
      const datos = await respuesta.json() 
      datos.forEach(tarea=>{
        let p = document.createElement("li")
        p.innerHTML=tarea.nombre

        let contenedor = document.createElement("div")
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        
        let lista = document.getElementById("lista")
        let botonEliminar = document.createElement("button") //Funcion para el boton elimiar
        botonEliminar.innerHTML = "🗑️"
        
        botonEliminar.addEventListener("click",()=>{
          //FUNCION DELETE
          eliminarTarea(tarea.id)
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

btnAgregar.addEventListener("click", () => {
  if (ingresar.value!= "") {
    guardarDatos()
  }
})



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

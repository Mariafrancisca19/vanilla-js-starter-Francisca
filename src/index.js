let ingresar = document.getElementById("ingresar");
let btnAgregar = document.getElementById("btn-agregar");
let btneliminar = document.getElementById("btn-eliminar");

//METODO POST
async function guardarDatos() {
  try {
    let tarea = {
      id: Date.now(),
      nombre: "TAREA",
      estado: false
    } 
    const respuesta = await fetch("http://localhost:3000/api/task",{
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(tarea)
    })
    let datos = await respuesta.json()
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}

btnAgregar.addEventListener("click",guardarDatos)


/*METODO GET*/

async function datos(){
  try {
      const respuesta = await fetch("http://localhost:3000/api/task")
      const datos = await respuesta.json()
      console.log(datos);
  } catch (error) {
   console.error(error);   
  }
}
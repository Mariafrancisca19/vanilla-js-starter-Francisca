let ingresar = document.getElementById("ingresar");
let btnAgregar = document.getElementById("btn-agregar");
let btneliminar = document.getElementById("btn-eliminar");
let lista = document.getElementById("lista")

/*METODO GET:Retorna todas las tareas*/

async function datos(){
  try {
    lista.innerHTML=""
      const respuesta = await fetch("http://localhost:3000/api/task")
      const datos = await respuesta.json() 
      datos.forEach(tarea=>{
        let p = document.createElement("li")
        p.innerHTML=tarea.nombre
        lista.appendChild(p)

         let contenedor = document.createElement("div")
        //  contenedor.innerHTML = tarea.nombre
        //  lista.appendChild(contenedor)

         let checkBox = document.createElement("checkbox")
         checkBox.innerHTML = tarea.nombre
         lista.appendChild(contenedor)


      })
      console.log(datos);
  } catch (error) {
   console.error(error);   
  }
}

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
  } catch (error) {
    console.error(error);
  }
}

btnAgregar.addEventListener("click", () => {
  guardarDatos()
})

//PUT : Modifica la tarea por el ID. Se le pasa un objeto con los datos que se quieren modificar.

async function actualizar(id) {
 try {
  let modificarTarea ={
    estado:true
  }

  const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(modificarTarea)
  })
  //hacer un console aqui
  let nuevoModificador = await respuesta.json()
  console.log(nuevoModificador);
  guardarDatos()
  
 } catch (error) {
  console.error(error);
 } 
}

//DELETE : Dado el ID, remueve la tarea






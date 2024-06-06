
//DELETE : Dado el ID, remueve la tarea


/*
Recuperamos el id para eliminar una tarea en especifico. Cada vez que se toque esa tarea, se 
pasara por parametro el id de esa tarea y se elimina SOLO esa tarea
*/

async function eliminarTarea(id) {
    try {
      const removerTarea = await fetch (`http://localhost:3000/api/task/${id}`, {
      method: "DELETE",
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
  
    })
    let remover = await removerTarea.json()
    console.log(remover);
     actualizar()          /*llamar a la funcion del put*/ 
      datos()    //Actualiza la pagina
      location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  
  export {eliminarTarea}
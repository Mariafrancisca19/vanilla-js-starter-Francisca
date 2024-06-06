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
        //llamar a la funcion post dentro del put
     
    } catch (error) {
     console.error(error);
    } 
   }

   export {actualizar}

/*get obtener datos*/

async function obtenerDatos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json();
        return datos
    } catch (error) {
        console.log(error)
    }
}

async function guardarDatos(nombre, correo, contrasena) {   /*post guardar datos*/
    try {
        const respuesta = await fetch("http://localhost:3000/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(

                {
                    name: nombre,
                    email: correo,
                    password: contrasena
                }
            )
        })

        let mostar = await respuesta.json()
        console.log("mostar")

    } catch (error) {
        console.error
    }

}

/*put actualizar datos*/

//PUT : Modifica o actualiza la tarea por el ID. Se le pasa un objeto con los datos que se quieren modificar.

async function actualizarDatos(id, nuevoDato) { /* funcion asincrona para obtener todas las tareas*/
    try {

        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "PUT",                                           /*cuerpo*/
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(

                {
                    password: nuevoDato

                }
            )
        })


    } catch (error) { /*utilizamos el catch para que guarde todos los errores*/
        console.error(error); /* el error se mostrara en consola*/
    }
}

async function eliminarDatos() {



}

/*Delete*/






export { obtenerDatos, guardarDatos, actualizarDatos }


















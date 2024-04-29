//1. verificar conexión con html
console.log('Holaaaaa soy registro');


//2. crear mi función para registro

const registrarUsuario = async () => {

    //2.1 Obtener los datos de mi formulario
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(nombreCompleto, correo, contrasena);


    //2.2crear un objeto con los datos del usuario
    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena
    }

    console.log(datosUsuario);

    //2.3 Hacer la petición POST para crear usuario en nuestra base de datos

    try {

        //Acá estamos creando el usuario en la base de datos
        const respuesta = await fetch('http://localhost:9000/api/crearUsuario',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosUsuario)
            }
        );

        const nuevoUsuario = await respuesta.json();
        console.log('Usuario creado exitosamente', nuevoUsuario);

        //condicional para redireccionar a ingreso.html
        if(nuevoUsuario){
            alert('Registro exitoso!');
            window.location.href = './ingreso.html'
        } else{
            alert('Ups! error de registro, inténtelo nuevamente');
        }


    } catch (error) {
        console.error('Error al registrar usuario', error);
    }

}
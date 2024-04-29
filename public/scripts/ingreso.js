//1. verificar conexion con html
console.log('holaaaa, soy ingreso');

//Crear mi función
const iniciarSesion = async () => {

    //1. Obtener los valores ingresados por el usuario
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(correo, contrasena);

    try {

        //2. Realizar la petición GET a nuestra base de datos
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario');

        const usuarios = await respuesta.json();
        console.log(usuarios);

        //3. Verificar si se encontró un usuario con el correo y la contraseña dados

        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

        if(esUsuarioRegistrado){

            //Verificamos si es admin
            const correoAdmin = 'admin@gmail.com';

            if(esUsuarioRegistrado.correo == correoAdmin ){
                alert('Hola administrador!');
                window.location.href ='./admin.html'
            } else{
                alert('Ingreso exitoso');
                window.location.href = './index.html'
            }



        }else{
            alert('Correo o contraseña incorrectos. Usuario no encontrado! Vuelve a intentar o regístrate');
        }



    } catch (error) {
        console.error('Error al verificar inicio de sesión:', error);
    }


}
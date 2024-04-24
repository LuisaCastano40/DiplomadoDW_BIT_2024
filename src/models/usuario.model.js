//Importar las dependencias que necesitamos usar
import mongoose from 'mongoose';

const schema = mongoose.Schema;


//Ahora nos creamos nuestro esquema de datos, que es lo que vamos a guardar en nuestra base de datos -> ESTRUCTURA

const usuarioSchema = new schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type:String,
        required: true
    },
    contrasena:{
        type:String,
        required:true
    }

});

//Yo quiero enviar la plantilla (schema) a nuestra base de datos
//Crear nuestro modelo

const usuarioModel = mongoose.model('usuario',usuarioSchema);

//Exportamos nuestro modelo

export default usuarioModel;


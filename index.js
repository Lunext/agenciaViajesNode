import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app=express(); 

//Conectar base de datos 
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error=>console.log(error));

//Definir puerto 
const port=process.env.PORT || 4000;



//Habilitar PUG 
app.set('view engine', 'pug'); 

//Crear tu propio midleware Obtener year actual 
app.use((req,res,next)=>{
    const year=new Date(); 

    res.locals.actualYear=year.getFullYear();
    res.locals.nombresitio="Agencia de Viajes";

    return next();

})
//Agregar body parser pa leer los datos del formulario
app.use(express.urlencoded({extended:true}));
//Definir la carpeta publica 
app.use(express.static('public'));
//Agregar Router 
app.use('/',router); 

app.listen(port,()=>{
    console.log(`El servidor esta funcionando e n el puerto ${port}`)
})
import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial=async(req,res)=>{

    //Validar 
    const {nombre, correo, mensaje}=req.body; 

    const errores=[]; 
    if(nombre.trim()===''){
        errores.push({mensaje:'El nombre ta vacio'}); 
    }
    if(correo.trim()===''){
        errores.push({mensaje:'El correo ta vacio'});
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:'El mensaje ta vacio'});
    }
    

    if(errores.length>0){
        //Consultar Testimoniales existentes 
        const testimoniales=await Testimonial.findAll();




        //Vista con errores 
        res.render('testimoniales',{

            pagina:'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    else{
        //Almacenarlo en la base de datos

       try{

        await Testimonial.create({

            nombre,
            correo,
            mensaje

        })

        res.redirect('/testimoniales');


       }catch(error){
        console.log(error)
       }

    }

}


export{
    guardarTestimonial

}
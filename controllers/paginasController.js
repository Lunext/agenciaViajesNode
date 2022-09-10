//import { restart } from "nodemon";
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio= async(req,res)=>{//req- lo que enviamos: res- lo que express nos responde 

   //Consultar 3 viajes del modelo viaje
   
   const promiseDB=[];
   promiseDB.push(Viaje.findAll({limit:3}));
   promiseDB.push(Testimonial.findAll({limit:3}));
   
   try{

      const resultado= await Promise.all(promiseDB);
      res.render('inicio',{
         pagina:'Inicio',
         clase:'home',
         viajes:resultado[0],
         testimoniales:resultado[1],
 
     });

   }catch(error){

      console.log(error); 

   }


    
 };

 const paginaNosotros=(req,res)=>{//req- lo que enviamos: res- lo que express nos responde 
    res.render('nosotros',{
       pagina:'Nosotros'
    });
 };

 const paginaViaje=async(req,res)=>{//req- lo que enviamos: res- lo que express nos responde 


    //Consultar base de datos
    const viajes=await Viaje.findAll(); 

    console.log(viajes);

    //const viajes='Viaje a Japon'; 
     res.render('viajes',{
        pagina:'Proximos Viajes',
        viajes,
     });
  };
  const paginaTestimonios= async(req,res)=>{//req- lo que enviamos: res- lo que express nos responde 

   try{
      const testimoniales=await Testimonial.findAll();
      res.render('testimoniales',{
         pagina:'Testimoniales',
         testimoniales
      });

   }catch(error){
      console.log(error);

   }
    //const viajes='Viaje a Japon'; 
    
  };

//Muestra un viaje por su slug
const paginaDetalleViaje=async(req,res)=>{
    const{slug}=req.params; 

    
    try{
       const viaje=await Viaje.findOne({where:{slug}});
       res.render('viaje',{
        pagina:'Informacion viaje',
        viaje
       })

    }catch(error){
        console.log(error); 
    }
    
}
 export{
    paginaInicio,
    paginaNosotros,
    paginaViaje,
    paginaTestimonios,
    paginaDetalleViaje



 }

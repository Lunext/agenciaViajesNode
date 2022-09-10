import express from "express";
import { paginaInicio,
        paginaNosotros,
        paginaTestimonios,
        paginaViaje,
        paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";


const router=express.Router(); 

router.get('/',paginaInicio);
  router.get('/nosotros',paginaNosotros);
  router.get('/viajes', paginaViaje);
  router.get('/viajes/:slug', paginaDetalleViaje);  
  router.get('/testimoniales',paginaTestimonios);
  router.post('/testimoniales',guardarTestimonial);

  export default router;

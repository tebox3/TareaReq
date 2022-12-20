import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/estudiantes.controller.js';

const router = Router();

// localhost:3000/api/notas

// COMISION

router.get("/estudiantes",getNotas)

router.post("/estudiantes",postNota)

router.put("/estudiantes",updateNota)

router.delete("/estudiantes/:id",deleteNota)

export default router;
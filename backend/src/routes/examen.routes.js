import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/examen.controller.js';

const router = Router();

// localhost:3000/api/notas

// COMISION

router.get("/examen",getNotas)

router.post("/examen",postNota)

router.put("/examen",updateNota)

router.delete("/examen/:id",deleteNota)

export default router;
import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/disponibilidad.controller.js';

const router = Router();

// localhost:3000/api/notas

// Disponibilidad

router.get("/disponibilidad",getNotas)

router.post("/disponibilidad",postNota)

router.put("/disponibilidad",updateNota)

router.delete("/disponibilidad/:id",deleteNota)

export default router;
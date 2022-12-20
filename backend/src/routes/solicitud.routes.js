import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/solicitud.controller.js';

const router = Router();

// localhost:3000/api/notas

// SOLICITUD

router.get("/solicitud",getNotas)

router.post("/solicitud",postNota)

router.put("/solicitud",updateNota)

router.delete("/solicitud/:id",deleteNota)

export default router;
import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/grupoComision.controller.js';

const router = Router();

// localhost:3000/api/notas

// COMISION

router.get("/grupoComision",getNotas)

router.post("/grupoComision",postNota)

router.put("/grupoComision",updateNota)

router.delete("/grupoComision/:id",deleteNota)

export default router;
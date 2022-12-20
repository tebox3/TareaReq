import {Router} from 'express';
import { getNotas,postNota,updateNota,deleteNota} from '../controllers/comision.controller.js';

const router = Router();

// localhost:3000/api/notas

// COMISION

router.get("/comision",getNotas)

router.post("/comision",postNota)

router.put("/comision",updateNota)

router.delete("/comision/:id",deleteNota)

export default router;
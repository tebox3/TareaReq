import {Router} from 'express'
import { getInfo, postInfo, putInfo, deleteInfo } from '../controllers/informacion.controller.js'

const router = Router()

router.get( '/info',getInfo)

router.post( '/info', postInfo)

router.put( '/info',putInfo);

router.delete( '/info/:id',deleteInfo);


export default router;
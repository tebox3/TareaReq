import express  from "express";
import cors from 'cors' 
import routerProyecto from './src/routes/informacion.routes.js'

//Crear aplicación express
const App = express();

//Permite la analización de entrada en formato json
App.use(express.json())

//Habilitación de cors 
App.use(cors())

//Trar end-points que esten disponible en la ruta localhost:3000/api/
App.use("/api",routerProyecto);


App.listen(3000);
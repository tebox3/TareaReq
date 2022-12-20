import express  from "express";
import cors from 'cors';
import routerProyecto from './src/routes/informacion.routes.js';
import comision from "./src/routes/comision.routes.js"; 
import disponibilidad from "./src/routes/disponibilidad.routes.js";
import estudiantes from "./src/routes/estudiantes.routes.js"
import examen from "./src/routes/examen.routes.js"
import grupoComision from "./src/routes/grupoComision.routes.js"
import solicitud from "./src/routes/solicitud.routes.js"

//Crear aplicación express
const App = express();

//Permite la analización de entrada en formato json
App.use(express.json())

//Habilitación de cors 
App.use(cors())

//Trar end-points que esten disponible en la ruta localhost:3000/api/
App.use("/api",routerProyecto);

App.use("/api",comision);

App.use("/api",disponibilidad);

App.use("/api",estudiantes);

App.use("/api",examen);

App.use("/api",grupoComision);

App.use("/api",solicitud);

App.listen(3000);
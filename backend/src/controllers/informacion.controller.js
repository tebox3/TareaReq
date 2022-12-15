import { Informacion } from "../model/informacion.model.js";
import { createInformacion, deleteInfomacion, getInformacion, updateInformacion } from "../persistence/informacion.persistence.js";

export const getInfo = async (req, res) => {
    const result = await getInformacion()
    res.json(result[0]);

} 

export const postInfo = async (req, res) => {
    let informacion = new Informacion(req.body)
    const result = await createInformacion(informacion);
    res.json("Información posteada correctamente")

}

export const putInfo = async(req, res) => {
    const result = await updateInformacion( new Informacion(req.body));
    res.send("información editada satisfactoriamente.. ");
}

export const deleteInfo = async(req, res) => {
    const result = deleteInfomacion( req.params.id)
   res.send("Eliminado correctamente");
}
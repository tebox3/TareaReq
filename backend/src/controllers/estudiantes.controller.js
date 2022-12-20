import {Estudiantes} from "../model/estudiantes.model.js";
import { crearNota,eliminarNota,actualizarNota,obtenerNotas} from "../persistence/estudiantes.persistence.js";

export const getNotas = async(req,res) => {
    const result = await obtenerNotas();
    res.json(result[0]);
}

export const postNota = async(req,res) => {
    let nota = new Estudiantes(req.body)
    console.log(nota)
    const result = await crearNota(nota);
    res.json("Nota posteada correctamente")
}

export const updateNota = async(req,res) => {
    const result = await actualizarNota(  new Estudiantes(req.body));
    res.send("nota editada correctamente.");
}

export const deleteNota = async(req,res) => {
    const result = eliminarNota( req.params.id)
    res.send("Eliminado correctamente.");
}
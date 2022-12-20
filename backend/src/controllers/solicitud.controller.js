import {GrupoComision} from "../model/grupoComision.model.js";
import { crearNota,eliminarNota,actualizarNota,obtenerNotas} from "../persistence/grupoComision.persistence.js";

export const getNotas = async(req,res) => {
    const result = await obtenerNotas();
    res.json(result[0]);
}

export const postNota = async(req,res) => {
    let nota = new GrupoComision(req.body)
    console.log(nota)
    const result = await crearNota(nota);
    res.json("Nota posteada correctamente")
}

export const updateNota = async(req,res) => {
    const result = await actualizarNota(  new GrupoComision(req.body));
    res.send("nota editada correctamente.");
}

export const deleteNota = async(req,res) => {
    const result = eliminarNota( req.params.id)
    res.send("Eliminado correctamente.");
}
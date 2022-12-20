import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM grupo_Comision")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM grupo_comision WHERE rut = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO grupo_comision (id,rut_miembro,id_examen) VALUES (?, ?, ?)', [nota.id, nota.rut_miembro, nota.id_examen])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE grupo_comision SET id_examen = ? WHERE ID = ?', [nota.id_examen, nota.id])
    return result;
}
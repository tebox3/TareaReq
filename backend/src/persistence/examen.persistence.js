import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM examen")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM examen WHERE ID = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO examen (id,id_comision,rut_estudiante,escuela,fecha,periodo,descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)', [nota.id, nota.id_comision, nota.rut_estudiante, nota.escuela, nota.fecha, nota.periodo, nota.descripcion])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE examen SET FECHA = ? WHERE ID = ?', [nota.fecha, nota.id])
    return result;
}
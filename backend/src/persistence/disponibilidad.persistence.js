import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM disponibilidad")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM disponibilidad WHERE FECHA = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO disponibilidad (fecha,periodo,estado) VALUES (?, ?, ?)', [nota.fecha, nota.periodo, nota.estado])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE disponibilidad SET PERIODO = ? WHERE ID = ?', [nota.periodo, nota.fecha])
    return result;
}
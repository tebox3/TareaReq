import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM solicitud")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM solicitud WHERE id = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO solicitud (id,rut_estudiante,fecha_solicitud,fecha_acordada,periodo,descripcion,estado) VALUES (?, ?, ?, ?, ?, ?, ?)', [nota.id, nota.rut_estudiante, nota.fecha_solicitud, nota.fecha_acordada, nota.periodo, nota.descripcion, nota.estado])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE solicitud SET fecha_acordada = ? WHERE ID = ?', [nota.fecha_acordada, nota.id])
    return result;
}
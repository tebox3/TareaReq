import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM estudiante")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM estudiante WHERE rut = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO estudiante (rut_estudiante, nombre, apellido, carrera) VALUES (?, ?, ?, ?)', [nota.rut_estudiante, nota.nombre, nota.apellido, nota.carrera])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE estudiante SET carrera = ? WHERE ID = ?', [nota.carrera, nota.rut_estudiante])
    return result;
}
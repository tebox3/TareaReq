import {pool} from '../db.js'

export const obtenerNotas = async() => {
    const result = await pool.query("SELECT * FROM comision")
    return result;
}

export const eliminarNota = async(id) => {
    const result = await pool.query('DELETE FROM comision WHERE rut = ?', [id])
    return result
}

export const crearNota = async(nota) => {
    const[row] = await pool.query('INSERT INTO comision (rut,nombre,apellido,profesor,escuela) VALUES (?, ?, ?, ?, ?)', [nota.rut, nota.nombre, nota.apellido, nota.profesor, nota.escuela])
    return {row}
}

export const actualizarNota = async(nota) => {
    const result = await pool.query('UPDATE comision SET escuela = ? WHERE ID = ?', [nota.escuela, nota.rut])
    return result;
}
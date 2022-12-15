import {pool} from '../db.js'

export const getInformacion = async() => {
    const result = await pool.query("SELECT * FROM informacion")
    return result;
}
export const deleteInfomacion = async(id) => {
    const result = await pool.query('DELETE FROM informacion WHERE id = ?', [id])
    return result
}
export const createInformacion = async(informacion) => {
    const [row] = await pool.query('INSERT INTO informacion (dato) VALUES (?)', [informacion.dato])
    return {row}
}
export const updateInformacion = async(informacion) => {

    const result = await pool.query('UPDATE informacion SET dato = ? WHERE ID = ?',[informacion.dato,informacion.id])
    return result;
}

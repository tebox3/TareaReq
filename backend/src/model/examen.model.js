export class Examen{
    constructor({id, id_comision, rut_estudiante, escuela, fecha, periodo, descripcion}){
        this.id = id;
        this.id_comision = id_comision;
        this.rut_estudiante = rut_estudiante;
        this.escuela = escuela;
        this.fecha = fecha;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
}

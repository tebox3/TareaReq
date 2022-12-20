export class Solicitud{
    constructor({id,rut_estudiante,fecha_solicitud,fecha_acordada,periodo,descripcion,estado}){
        this.id = id;
        this.rut_estudiante = rut_estudiante;
        this.fecha_solicitud = fecha_solicitud;
        this.fecha_acordada = fecha_acordada;
        this.periodo = periodo;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}

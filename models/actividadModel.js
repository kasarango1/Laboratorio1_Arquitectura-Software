// models/actividadModel.js
class Actividad {
  constructor({ titulo, descripcion, fechaInicio, fechaFin, tipo, estudianteId }) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.tipo = tipo;
    this.estudianteId = estudianteId;
  }

  getDetalles() {
    return `${this.tipo}: ${this.titulo} - ${this.descripcion}`;
  }
}

module.exports = Actividad;

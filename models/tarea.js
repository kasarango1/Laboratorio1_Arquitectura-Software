// models/Tarea.js
const Actividad = require('./actividadModel');

class Tarea extends Actividad {
  constructor(data) {
    super(data);
    this.materia = data.materia;
  }

  getDetalles() {
    return `${super.getDetalles()} - Materia: ${this.materia}`;
  }
}

module.exports = Tarea;

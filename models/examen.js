// models/Examen.js
const Actividad = require('./actividadModel');

class Examen extends Actividad {
  constructor(data) {
    super(data);
    this.materia = data.materia;
    this.tipoExamen = data.tipoExamen;
  }

  getDetalles() {
    return `${super.getDetalles()} - Examen de ${this.materia} (${this.tipoExamen})`;
  }
}

module.exports = Examen;

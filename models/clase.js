// models/Clase.js
const Actividad = require('./actividadModel');

class Clase extends Actividad {z
  constructor(data) {
    super(data);
    this.ubicacion = data.ubicacion;
    this.profesor = data.profesor;
  }

  getDetalles() {
    return `${super.getDetalles()} - Clase con ${this.profesor} en ${this.ubicacion}`;
  }
}

module.exports = Clase;

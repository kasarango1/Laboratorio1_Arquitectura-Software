// models/estudianteModel.js
const actividadRepo = require('../repositories/actividadRepository');

class Estudiante {
  constructor({ id, nombre, correo }) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
  }

  async registrarActividad(actividadData) {
    actividadData.estudianteId = this.id;
    return await actividadRepo.insertarActividad(actividadData);
  }

  async listarActividades() {
    return await actividadRepo.consultarActividadesPorEstudiante(this.id);
  }
}

module.exports = Estudiante;

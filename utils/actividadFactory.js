// utils/actividadFactory.js
const Tarea = require('../models/tarea');
const Examen = require('../models/examen');
const Clase = require('../models/clase');
const Actividad = require('../models/actividadModel');

function crearActividadDinamica(data) {
  switch (data.tipo) {
    case 'Tarea':
      return new Tarea(data);
    case 'Examen':
      return new Examen(data);
    case 'Clase':
      return new Clase(data);
    default:
      return new Actividad(data);
  }
}

module.exports = { crearActividadDinamica };

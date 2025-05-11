const repo = require('../repositories/actividadRepository');
const validador = require('../validators/actividadValidator');
const { crearActividadDinamica } = require('../utils/actividadFactory');

async function crearActividad(data) {
  validador.validarCamposObligatorios(data);
  validador.validarFechas(data.fechaInicio, data.fechaFin);
  validador.validarTipoActividad(data.tipo);
  validador.validarCamposPorTipo(data);
  return await repo.insertarActividad(data);
}

async function editarActividad(id, data) {
  validador.validarCamposObligatorios(data);
  validador.validarFechas(data.fechaInicio, data.fechaFin);
  validador.validarTipoActividad(data.tipo);
  validador.validarCamposPorTipo(data);
  return await repo.actualizarActividad(id, data);
}

async function eliminarActividad(id) {
  return await repo.eliminarActividad(id);
}

const estudianteRepo = require('../repositories/estudianteRepository');

async function listarActividadesPorEstudiante(estudianteId) {
  const estudiante = await estudianteRepo.buscarEstudiantePorId(estudianteId);
  if (!estudiante) {
    throw new Error('Estudiante no encontrado');
  }

  const datos = await repo.consultarActividadesPorEstudiante(estudianteId);
  return datos.map(actividad => {
    const instancia = crearActividadDinamica(actividad);
    return {
      ...actividad,
      detalles: instancia.getDetalles()
    };
  });
}

async function buscarActividadPorId(id) {
  const actividad = await repo.consultarActividadPorId(id);
  if (!actividad) throw new Error('Actividad no encontrada');
  const instancia = crearActividadDinamica(actividad);
  return {
    ...actividad,
    detalles: instancia.getDetalles()
  };
}

module.exports = {
  crearActividad,
  editarActividad,
  eliminarActividad,
  listarActividadesPorEstudiante,
  buscarActividadPorId
};

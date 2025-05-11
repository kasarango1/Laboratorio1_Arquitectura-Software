const servicio = require('../services/actividadService');

async function crearActividad(req, res) {
  try {
    const actividad = await servicio.crearActividad(req.body);
    res.status(201).json(actividad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function editarActividad(req, res) {
  try {
    const actividad = await servicio.editarActividad(req.params.id, req.body);
    res.json(actividad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function eliminarActividad(req, res) {
  try {
    await servicio.eliminarActividad(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function listarActividadesPorEstudiante(req, res) {
  try {
    const actividades = await servicio.listarActividadesPorEstudiante(req.params.id);
    if (actividades.length === 0) {
      return res.status(404).json({ error: 'No hay actividades asociadas a este estudiante' });
    }
    res.json(actividades);
  } catch (error) {
    if (error.message === 'Estudiante no encontrado') {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
}


async function buscarActividadPorId(req, res) {
  try {
    const actividad = await servicio.buscarActividadPorId(req.params.id);
    res.json(actividad);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  crearActividad,
  editarActividad,
  eliminarActividad,
  listarActividadesPorEstudiante,
  buscarActividadPorId
};

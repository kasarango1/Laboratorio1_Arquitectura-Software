const express = require('express');
const router = express.Router();
const servicio = require('../services/actividadService');

// POST /actividades
router.post('/', async (req, res) => {
  try {
    const actividad = await servicio.crearActividad(req.body);
    res.status(201).json(actividad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /actividades/:id
router.put('/:id', async (req, res) => {
  try {
    const actividad = await servicio.editarActividad(req.params.id, req.body);
    res.json(actividad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /actividades/:id
router.delete('/:id', async (req, res) => {
  try {
    await servicio.eliminarActividad(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /actividades/estudiante/:id
// routes/actividadRoutes.js
router.get('/estudiante/:id', async (req, res) => {
  try {
    const actividades = await servicio.listarActividadesPorEstudiante(req.params.id);
    res.json(actividades);
  } catch (error) {
    res.status(error.message === 'Estudiante no encontrado' ? 404 : 400).json({ error: error.message });
  }
});



// GET /actividades/:id
router.get('/:id', async (req, res) => {
  try {
    const actividad = await servicio.buscarActividadPorId(req.params.id);
    res.json(actividad);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


module.exports = router;
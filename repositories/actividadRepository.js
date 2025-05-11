const db = require('../db/connection');

async function insertarActividad(actividad) {
  const { titulo, descripcion, fechaInicio, fechaFin, tipo, estudianteId, materia, tipoExamen, ubicacion, profesor } = actividad;

    const result = await db.query(
    `INSERT INTO actividades (titulo, descripcion, fecha_inicio, fecha_fin, tipo, estudiante_id, materia, tipo_examen, ubicacion, profesor)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
    [titulo, descripcion, fechaInicio, fechaFin, tipo, estudianteId, materia, tipoExamen, ubicacion, profesor]
    );

  return result.rows[0];
}

async function actualizarActividad(id, datos) {
  const { titulo, descripcion, fechaInicio, fechaFin, tipo, materia, tipoExamen, ubicacion, profesor } = datos;

    const result = await db.query(
    `UPDATE actividades
    SET titulo=$1, descripcion=$2, fecha_inicio=$3, fecha_fin=$4, tipo=$5, materia=$6, tipo_examen=$7, ubicacion=$8, profesor=$9
    WHERE id=$10 RETURNING *`,
    [titulo, descripcion, fechaInicio, fechaFin, tipo, materia, tipoExamen, ubicacion, profesor, id]
    );

  return result.rows[0];
}

async function eliminarActividad(id) {
  await db.query('DELETE FROM actividades WHERE id = $1', [id]);
}

async function consultarActividadesPorEstudiante(estudianteId) {
  const result = await db.query('SELECT * FROM actividades WHERE estudiante_id = $1', [estudianteId]);
  return result.rows; 
}


async function consultarActividadPorId(id) {
  const result = await db.query('SELECT * FROM actividades WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = {
  insertarActividad,
  actualizarActividad,
  eliminarActividad,
  consultarActividadesPorEstudiante,
  consultarActividadPorId
};

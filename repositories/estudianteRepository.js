// repositories/estudianteRepository.js
const db = require('../db/connection');

async function insertarEstudiante({ nombre, correo }) {
  const result = await db.query(
    'INSERT INTO estudiantes (nombre, correo) VALUES ($1, $2) RETURNING *',
    [nombre, correo]
  );
  return result.rows[0];
}

async function buscarEstudiantePorId(id) {
  const result = await db.query('SELECT * FROM estudiantes WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = {
  insertarEstudiante,
  buscarEstudiantePorId
};

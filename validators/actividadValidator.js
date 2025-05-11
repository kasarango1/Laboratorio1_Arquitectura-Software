function validarFechas(fechaInicio, fechaFin) {
  if (new Date(fechaInicio) > new Date(fechaFin)) {
    throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
  }
}

function validarCamposObligatorios({ titulo, descripcion, tipo }) {
  if (!titulo || !descripcion || !tipo) {
    throw new Error('Faltan campos obligatorios');
  }
}

function validarCamposPorTipo(data) {
  if (data.tipo === 'Tarea' && !data.materia) {
    throw new Error('La tarea debe incluir una materia');
  }
  if (data.tipo === 'Examen' && (!data.materia || !data.tipoExamen)) {
    throw new Error('El examen debe incluir materia y tipo de examen');
  }
  if (data.tipo === 'Clase' && (!data.ubicacion || !data.profesor)) {
    throw new Error('La clase debe incluir ubicación y profesor');
  }
}

function validarTipoActividad(tipo) {
  const tiposValidos = ['Tarea', 'Examen', 'Clase'];
  if (!tiposValidos.includes(tipo)) {
    throw new Error(`Tipo de actividad no válido: ${tipo}`);
  }
}

module.exports = {
  validarFechas,
  validarCamposObligatorios,
  validarTipoActividad,
  validarCamposPorTipo
};

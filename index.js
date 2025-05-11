const express = require('express');
const app = express();
const actividadRoutes = require('./routes/actividadRoutes');

app.use(express.json());
app.use('/actividades', actividadRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

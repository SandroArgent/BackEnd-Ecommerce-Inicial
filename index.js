import app from './src/app.js';
import { sequelize, testConnection } from './src/config/database.js';


// IMPORTANTE:
// Este import carga todos los modelos de Sequelize antes de ejecutar sync().
// Es necesario porque Sequelize solo crea tablas de los modelos que ya fueron registrados.
// Si no se importan aquí, sync() puede no generar las tablas en la base de datos.
import "./src/models/index.js";

const startServer = async () => {
  try {
    // Paso A: Verificar la conexión
    await testConnection();

    // Paso B: Crear tablas (si no existen)
    await sequelize.sync({ force: false });
    console.log('✅ Tablas sincronizadas');

    // Paso C: Abrir el puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('💥 Error fatal:', error);
  }
};

startServer();
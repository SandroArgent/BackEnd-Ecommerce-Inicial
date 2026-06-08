// app.js es el núcleo de configuración de Express.

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from "../Routes/index.js"; //Importamos las rutas


const app = express();

app.use(cors());           // Permite que React se conecte
app.use(morgan('dev'));    // Muestra: GET /products 200 en consola
app.use(express.json());   // Entiende los objetos JSON que enviamos

app.use('/api', routes); // esto le dice a Express: “Todo lo que venga después de /api va a ser manejado por este conjunto de rutas”

export default app;
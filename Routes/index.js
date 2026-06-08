 
 
 //este archivo reune todas las rutas!!

 
import express from "express";

import productoRoutes from "./productoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import clienteRoutes from "./clienteRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import usuarioAdminRoutes from "./usuarioAdminRoutes.js";

const router = express.Router();

router.use("/productos", productoRoutes);
router.use("/categorias", categoriaRoutes);
router.use("/clientes", clienteRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/admins", usuarioAdminRoutes);

export default router;
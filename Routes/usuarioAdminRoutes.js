import express from "express";
import * as usuarioAdminController from "../controllers/usuarioAdminController.js";

const router = express.Router();

router.get("/", usuarioAdminController.getAll);
router.get("/:id", usuarioAdminController.getById);
router.post("/", usuarioAdminController.create);
router.put("/:id", usuarioAdminController.update);
router.delete("/:id", usuarioAdminController.remove);

export default router;
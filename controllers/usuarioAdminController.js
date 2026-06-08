import { UsuarioAdmin } from "../src/models/index.js";

export const getAll = async (req, res) => {
    try {
        const admins = await UsuarioAdmin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const admin = await UsuarioAdmin.findByPk(req.params.id);

        if (!admin) {
            return res.status(404).json({ mensaje: "Administrador no encontrado" });
        }

        res.json(admin);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const admin = await UsuarioAdmin.create(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const update = async (req, res) => {
    try {
        await UsuarioAdmin.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Administrador actualizado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await UsuarioAdmin.destroy({
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Administrador eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
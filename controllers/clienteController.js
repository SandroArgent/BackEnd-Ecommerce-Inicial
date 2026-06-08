import { Cliente } from "../src/models/index.js";

export const getAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            return res.status(404).json({ mensaje: "Cliente no encontrado" });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const update = async (req, res) => {
    try {
        await Cliente.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Cliente actualizado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await Cliente.destroy({
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
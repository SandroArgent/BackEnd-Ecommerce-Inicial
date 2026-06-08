import { Pedido } from "../src/models/index.js";

export const getAll = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);

        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const update = async (req, res) => {
    try {
        await Pedido.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Pedido actualizado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await Pedido.destroy({
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Pedido eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
import { Producto } from "../src/models/index.js";  //importo desde el index ubicado en models

export const getAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const update = async (req, res) => {
    try {
        await Producto.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Producto actualizado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await Producto.destroy({
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
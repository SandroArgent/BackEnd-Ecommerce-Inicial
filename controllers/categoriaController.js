import { Categoria } from "../src/models/index.js";

export const getAll = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const update = async (req, res) => {
    try {
        await Categoria.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Categoría actualizada" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await Categoria.destroy({
            where: { id: req.params.id }
        });

        res.json({ mensaje: "Categoría eliminada" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Pedido = sequelize.define("Pedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: "pendiente"
    }
});

export default Pedido;
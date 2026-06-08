import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const UsuarioAdmin = sequelize.define("UsuarioAdmin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

export default UsuarioAdmin;
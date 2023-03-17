import { DataTypes } from "sequelize";
import {db} from "../db.js";

export const User = db.define('psicologos', 
{
    idPsicologos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    Apresentacao: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}, {
        timestamps: false, 
        tableName: 'psicologos',
    }
);
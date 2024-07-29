"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Partida extends sequelize_1.Model {
}
Partida.init({
    data: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    dweek: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    periodo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nmatch: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lane: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pick: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    enemy: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    wlane: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    kills: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    deaths: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    assists: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    gresult: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pdl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    farm: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    elo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    resume: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Partida',
    tableName: 'partidas', // Nome da tabela no bd
    timestamps: false
});
exports.default = Partida;

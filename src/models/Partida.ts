import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'

class Partida extends Model {}

Partida.init({
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dweek: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    periodo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nmatch: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lane: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pick: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    enemy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wlane: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kills: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deaths: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assists: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gresult: {
        type: DataTypes.STRING,
        allowNull: false,
    } ,
    pdl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    farm: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    elo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resume: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Partida',
    tableName: 'partidas', // Nome da tabela no bd
    timestamps: false
})

export default Partida
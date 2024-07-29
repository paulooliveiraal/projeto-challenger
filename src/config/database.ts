import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('projetochallenger', 'projetochallengeruser', 'minhasenha', {
    host: '127.0.0.1',
    dialect: 'postgres',
})

export default sequelize
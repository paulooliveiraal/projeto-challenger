import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import Partida from './models/Partida';
import path from 'path';

const app = express();
const PORT = 3000;

// psql -U projetochallengeruser -d projetochallenger
// comando pra acessar o postgres no terminal
// Configura o middleware para analisar dados JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public/')));

// Serve para arquivos estáticos da pasta dist
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// Rota GET para a raiz do projeto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota GET para a página de lista de partidas
app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/partidas.html'));
});

// Rota para salvar os dados do formulário
app.post('/api/partidas', async (req, res) => {
    try {
        const data = req.body;
        if (data.data) { // Formatar a data pra remover o horário.
            const [day, month, year] = data.data.split('/'); // Eu só quero a data.
            data.data = `${year}-${month}-${day}`;
        }
        console.log('Dados recebidos!', data);
        const partida = await Partida.create(data);
        res.redirect('/games'); // Redireciona para a página de lista de partidas após salvar
    } catch (error) {
        console.error('Erro ao salvar a partida:', error);
        res.status(500).send('Erro a salvar a partida.');
    }
});

// Rota para obter as partidas salvar
app.get('/api/partidas', async (req, res) => {
    try {
        const partidas = await Partida.findAll();
        const partidasFormatadas = partidas.map(partida => {
            const data = partida.dataValues.data;
            if (data) {
                const [year, month, day] = data.split('-');
                partida.dataValues.data = `${day}/${month}/${year}`
            }
            return partida;
        })
        res.json(partidasFormatadas);
    } catch (error) {
        console.error('Erro ao buscar as partidas:', error);
        res.status(500).send('Erro ao buscar as partidas.');
    }
});

// Inicia o servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
});

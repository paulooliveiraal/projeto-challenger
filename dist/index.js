"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const Partida_1 = __importDefault(require("./models/Partida"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// psql -U projetochallengeruser -d projetochallenger
// comando pra acessar o postgres no terminal
// Configura o middleware para analisar dados JSON
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Configura o middleware para servir arquivos estáticos da pasta 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, '../public/')));
// Serve para arquivos estáticos da pasta dist
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../dist')));
// Rota GET para a raiz do projeto
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
// Rota GET para a página de lista de partidas
app.get('/games', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/partidas.html'));
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
        const partida = await Partida_1.default.create(data);
        res.redirect('/games'); // Redireciona para a página de lista de partidas após salvar
    }
    catch (error) {
        console.error('Erro ao salvar a partida:', error);
        res.status(500).send('Erro a salvar a partida.');
    }
});
// Rota para obter as partidas salvar
app.get('/api/partidas', async (req, res) => {
    try {
        const partidas = await Partida_1.default.findAll();
        const partidasFormatadas = partidas.map(partida => {
            const data = partida.dataValues.data;
            if (data) {
                const [year, month, day] = data.split('-');
                partida.dataValues.data = `${day}/${month}/${year}`;
            }
            return partida;
        });
        res.json(partidasFormatadas);
    }
    catch (error) {
        console.error('Erro ao buscar as partidas:', error);
        res.status(500).send('Erro ao buscar as partidas.');
    }
});
// Inicia o servidor
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
});

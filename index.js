import express from 'express';
import cors from 'cors';
import rotaLivro from './Rotas/rotaLivro.js';

const host='0.0.0.0';
const porta='4000';
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', rotaLivro);


app.listen(porta, host, () => {
    console.log(`Servidor escutando na porta ${host}:${porta}.`);
})

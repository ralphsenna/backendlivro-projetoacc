import { Router } from 'express';
import Livro from '../Modelo/livro.js';

const rotaLivro = new Router();
const livro = new Livro();

rotaLivro
.get('/consulta-dados', livro.consultar)
.get('/liveness', livro.liveness)
.get('/readiness', livro.readiness)

export default rotaLivro;

import conectar from '../Persistencia/conexao.js';
import os from 'os';


export default class Livro 
{
    #codigo
    #titulo
    #editora
    #genero
    #dataPublicacao
    #numPaginas
    #autor

    constructor(codigo=0, titulo="", editora="", genero="", dataPublicacao="", numPaginas=0, autor="")
    {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#editora = editora;
        this.#genero = genero;
        this.#dataPublicacao = dataPublicacao;
        this.#numPaginas = numPaginas;
        this.#autor = autor;
    }    

    toJSON()
    {
        return {
            codigo: this.#codigo,
            titulo: this.#titulo,
            editora: this.#editora,
            genero: this.#genero,
            dataPublicacao: this.#dataPublicacao,
            numPaginas: this.#numPaginas,
            autor: this.#autor
        }
    }

    async consultar(requisicao, resposta) 
    {
        const conexao = await conectar();
        let listaLivros = [];
        try 
        {
            resposta.type('application/json');
            const [registros] = await conexao.query("SELECT * FROM Livro l");
            for (const registro of registros)
            {
                const livro = new Livro(registro.liv_cod, registro.liv_titulo, registro.liv_editora, registro.liv_genero, 
                                        registro.liv_data_publicacao, registro.liv_num_paginas, registro.liv_aut);
                listaLivros.push(livro);
            }
            resposta.status(200).json({
                metodo: requisicao.method,
                status: true,
                listaLivros
            });
        }
        catch (erro)
        {
            resposta.status(500).json({
                metodo: requisicao.method,
                status: false,
                mensagem: "Erro ao obter livros: " + erro.message
            });
        }
        conexao.release();
    }

    async liveness(requisicao, resposta)
    {
        resposta.status(200).json({
            metodo: requisicao.method,
            status: true,
            caminho: process.cwd()
        });
    }

    async readiness(requisicao, resposta)
    {
        resposta.status(200).json({
            metodo: requisicao.method,
            status: true,
            plataforma: os.platform(),
            arquitetura: os.arch(),
            memoria_livre: os.freemem(),
            usuario_local: os.homedir(),
            data: new Date().getTime()
        });
    }
}

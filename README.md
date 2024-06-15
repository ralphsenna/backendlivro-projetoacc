# Como Executar o Aplicativo
> [!NOTE]
> * Links de acesso ao projeto no final do documento.
> * Este projeto foi feito usando banco de dados online tipo `MySQL`.

1° Passo - Para executar esse projeto, é necessário já ter previamente instaladas as últimas versões do Node e do Docker Desktop.

2° Passo - Mantenha o Docker Desktop aberto durante o processo e execute os seguintes comandos na sua IDE de preferência:
```
echo dckr_pat_fo4WrVj7YwNMJuR9Q4d8KhxYip4 | docker login -u ralphsenna --password-stdin
docker pull ralphsenna/projeto-acc:0.0.1
docker run -p 4000:4000 --name projeto-acc -d ralphsenna/projeto-acc:0.0.1
```

3° Passo - Agora basta abrir seu navegador e fazer o teste com as rotas implementadas no projeto:
```
http://localhost:4000/consulta-dados
http://localhost:4000/liveness
http://localhost:4000/readiness
```

## Scripts Banco de Dados
```
CREATE TABLE Livro (
    liv_cod INT PRIMARY KEY AUTO_INCREMENT,
    liv_titulo VARCHAR(100) NOT NULL,
    liv_editora VARCHAR(100) NOT NULL,
    liv_genero VARCHAR(50) NOT NULL,
    liv_data_publicacao DATE NOT NULL,
    liv_num_paginas INT NOT NULL,
    liv_aut VARCHAR(100) NOT NULL
);

INSERT INTO Livro (liv_titulo, liv_editora, liv_genero, liv_data_publicacao, liv_num_paginas, liv_aut)
VALUES 
('Dom Casmurro', 'Editora Record', 'Romance', '1899-01-01', 256, 'Machado de Assis'),
('O Alquimista', 'Editora Rocco', 'Ficção', '1988-01-01', 208, 'Paulo Coelho'),
('Capitães da Areia', 'Editora Companhia das Letras', 'Romance', '1937-01-01', 272, 'Jorge Amado'),
('A Moreninha', 'Editora Ática', 'Romance', '1844-01-01', 176, 'Joaquim Manuel de Macedo'),
('Grande Sertão: Veredas', 'Editora Nova Fronteira', 'Ficção', '1956-01-01', 608, 'João Guimarães Rosa'),
('Memórias Póstumas de Brás Cubas', 'Editora Globo', 'Romance', '1881-01-01', 208, 'Machado de Assis'),
('Iracema', 'Editora José Olympio', 'Romance', '1865-01-01', 152, 'José de Alencar'),
('O Guarani', 'Editora Ática', 'Romance', '1857-01-01', 384, 'José de Alencar'),
('Vidas Secas', 'Editora Record', 'Ficção', '1938-01-01', 175, 'Graciliano Ramos'),
('O Primo Basílio', 'Editora L&PM', 'Romance', '1878-01-01', 536, 'Eça de Queiroz'),
('Macunaíma', 'Editora Globo', 'Modernismo', '1928-01-01', 224, 'Mário de Andrade'),
('A Hora da Estrela', 'Editora Rocco', 'Ficção', '1977-01-01', 88, 'Clarice Lispector'),
('Ensaio Sobre a Cegueira', 'Editora Companhia das Letras', 'Ficção', '1995-01-01', 310, 'José Saramago'),
('Os Maias', 'Editora L&PM', 'Romance', '1888-01-01', 732, 'Eça de Queiroz'),
('Senhora', 'Editora Ática', 'Romance', '1875-01-01', 288, 'José de Alencar');
```

## Conexão com Banco de Dados
```
export default async function conectar()
{
    const pool = mysql.createPool({
        host: 'sql10.freesqldatabase.com',
        port: 3306,
        user: 'sql10714155',
        password: '4RR3x4MaT1',
        database: 'sql10714155',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    });
    return await pool.getConnection();
}

```

## Links

[Repositório GitHub](https://github.com/ralphsenna/backendlivro-projetoacc)

[Repositório DockerHub](https://hub.docker.com/repository/docker/ralphsenna/projeto-acc)


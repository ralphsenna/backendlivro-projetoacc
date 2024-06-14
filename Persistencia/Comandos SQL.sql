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
('Grande Sertão: Veredas', 'Editora Nova Fronteira', 'Ficção', '1956-01-01', 608, 'João Guimarães Rosa');

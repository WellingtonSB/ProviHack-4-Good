CREATE DATABASE lacrei;
USE lacrei;

CREATE TABLE IF NOT EXISTS usuarios (
id bigint auto_increment primary key,
email varchar(100),
senha varchar(100),
nome varchar(50),
sobrenome varchar(100),
data_nascimento date,
id_genero int, -- código #001: será um enum para uma caixa de seleção
sexualidade int, -- #001
etnia int, -- #001
escolaridade int, -- #001
area_atuacao varchar(20), 
cursos varchar(1500), -- código #002: poderia ser uma outra tabela
deficiencia boolean default false,
tipodeficiencia int,
telefonecontato varchar(20),
linkedin varchar(200),  
createdAt timestamp NULL DEFAULT NULL,
  updatedAt timestamp NULL DEFAULT NULL
)ENGINE = innodb;

CREATE TABLE IF NOT EXISTS experiencia (
id_xp bigint auto_increment primary key,
empresa varchar(100),
dataInicio date,
dataTermino date,
empAtual boolean,
empregoAtual boolean,
cargo varchar(50),
descricao varchar(500),
id_usuario bigint ,
-- foreign key(id_usuarie) references usuarie(id)
  createdAt timestamp NULL DEFAULT NULL,
  updatedAt timestamp NULL DEFAULT NULL
)ENGINE = innodb;

CREATE TABLE IF NOT EXISTS empresas (
id_e bigint auto_increment primary key,
email varchar(100),
senha varchar(50),
nome varchar(200),
cnpj varchar(50),
descricao varchar(2000),

comite boolean default false,
beneficios boolean default false,
funcionarios boolean default false,
empresaValidada boolean default false,
toiletteUnis boolean default false,    -- código #003: aguarda mais informações

-- 12 normas de acessibilidade -- kills #003
sinalizacaoDesniveis boolean default false,
espCadeirasRodas boolean default false,
vagasEntradas boolean default false,
rotaAcessivel boolean default false,
vaoPortas boolean default false,
sanitariosRotas boolean default false,
mensagensTdd boolean default false,
mesasAcess boolean default false,
simboloAcesso boolean default false,
sinalTatil boolean default false,
sinalSom boolean default false,
elevador boolean default false,
  createdAt timestamp NULL DEFAULT NULL,
  updatedAt timestamp NULL DEFAULT NULL
)ENGINE = innodb;

CREATE TABLE IF NOT EXISTS avalEmpresa(
id_aval_e bigint not null auto_increment primary key,
empresa bigint,         -- usar como identificador da empresa
resumo varchar(2000),

ambienteInclus boolean default false,
comiteLgbtquiapn boolean default false,
benefitsConj boolean default false,
funcionariosComunid boolean default false,
remunerBenefit boolean default false,
culturaValores boolean not null default false,
toiletteUnis boolean not null default false,    -- código #003: aguarda mais informações -- Depende da tabela empresa
qualidadeVida boolean default false,
liderancas varchar(500),
id_empresa_avl bigint,
-- foreign key(id_empresa_avl) references empresa(id_e), -- chave e para empresa
id_candidato_avl bigint ,
-- foreign key(id_candidato_avl) references usuarie(id)  -- chave e para candidato
  createdAt timestamp NULL DEFAULT NULL,
  updatedAt timestamp NULL DEFAULT NULL
)ENGINE = innodb;

CREATE TABLE IF NOT EXISTS vagas(
id_vaga bigint auto_increment primary key,
nome varchar(255),
descricaoVaga varchar(5000),
beneficios varchar(500),
salario varchar(100),
linkSite varchar(500),
abertaFechada boolean default true,
id_empresa bigint,
-- foreign key(id_empresa) references empresa(id_e), -- chave e para candidato
id_candidato bigint ,
--  key(id_candidato) references usuarie(id)  -- chave e para empresa
  createdAt timestamp NULL DEFAULT NULL,
  updatedAt timestamp NULL DEFAULT NULL
)ENGINE = innodb;

ALTER TABLE avalEmpresa ADD foreign key(id_empresa_avl) references empresas(id_e),
ADD foreign key(id_candidato_avl) references usuarios(id);

ALTER TABLE experiencia ADD foreign key(id_usuario) references usuarios(id);

ALTER TABLE vagas ADD foreign key(id_empresa) references empresas(id_e),  -- chave e para candidato
ADD foreign key(id_candidato) references usuarios(id);  -- chave e para empresa
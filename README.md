<h1 align="center">API TRAKTO</h1>
<p align="center">
  <img alt="Linguagem principal" src="https://img.shields.io/github/languages/top/moisespompilio/api-trakto?color=56BEB8">
  <img alt="Quantidade de linguagens" src="https://img.shields.io/github/languages/count/moisespompilio/api-trakto?color=56BEB8">
  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/moisespompilio/api-trakto?color=56BEB8">
  <img alt="Licença" src="https://img.shields.io/github/license/moisespompilio/api-trakto?color=56BEB8">
</p>
<p align="center">
  <a href="https://github.com/moisespompilio" target="_blank">Autor</a>
</p>
<br>
:dart: Sobre
O projeto foi desenvolvido utilizando NestJS com TypeScript. Ele consiste em um aplicativo que permite realizar buscas em uma URL para baixar fotos, redimensionar e compactar as imagens usando a biblioteca Sharp e gerenciar arquivos utilizando o módulo fs. Além disso, o projeto possui a integração do Axios para realizar requisições HTTP.

A estrutura do projeto segue as seguintes disposições de pastas:

node_modules: Pasta que armazena os módulos do Node.js.
src: Pasta que contém o código-fonte do projeto.
config: Pasta que contém as configurações do projeto.
image: Responsável por criar a pasta "image" na raiz do projeto, caso não exista, e armazenar os caminhos para essa pasta.
swagger: Contém as configurações do Swagger para documentar o código.
modules: Pasta que contém os módulos do projeto, onde o principal é o módulo "image".
model: Pasta que define o modelo da requisição.
pathvariable: Responsável por criar nomes únicos para as imagens a serem armazenadas pelo sistema.
schema: Pasta que contém o schema e o documento da imagem para serem salvos no banco de dados.
image.service: Arquivo que contém a lógica de negócio do módulo "image".
image.controller: Arquivo que contém os controladores do módulo "image".
image.module: Arquivo que define o módulo "image".
share: Pasta que contém as funcionalidades compartilhadas.
decorator: Pasta que armazena os decoradores personalizados.
util: Pasta que contém funções de auxílio.
exception: Pasta que contém as exceções personalizadas.
Para iniciar o projeto, é possível utilizar o Docker com o comando docker-compose up --build, que instanciará tudo, incluindo o banco de dados MongoDB. Também é possível iniciar o projeto diretamente com os comandos npm run start ou npm run start:dev para desenvolvedor. Antes de iniciar o projeto, certifique-se de criar o arquivo .env e preencher as variáveis de ambiente conforme o exemplo disponível em .env.example.

:sparkles: Funcionalidades
Realizar busca por link da image.
Baixar fotos através de URLs.
Redimensionar e compactar imagens utilizando a biblioteca Sharp.
Documentação do código através do Swagger.
Estrutura de pastas organizada.
:rocket: Tecnologias
As seguintes ferramentas foram utilizadas neste projeto:

NestJS
TypeScript
Axios
fs
Sharp
:white_check_mark: Requisitos
Antes de iniciar, certifique-se de ter o Git e Docker  instalados em sua máquina.

:checkered_flag: Iniciando
bash
Copy code
# Clone este repositório
$ git clone https://github.com/moisespompilio/api-trakto

# Acesse a pasta do projeto
$ cd api-trakto

# Configurarção necessária
$ cp .env.example .env 

# Inicie o projeto
$ docker-compose up --build

# O servidor será iniciado em <http://localhost:{port-api}>
:memo: Licença
Este projeto está sob licença do MIT. Para mais detalhes, consulte o arquivo LICENSE.

Feito com :heart: por <a href="https://github.com/moisespompilio" target="_blank">Moises Pompilio</a>

 

<a href="#top">Voltar ao topo</a>
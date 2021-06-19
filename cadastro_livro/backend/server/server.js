//Parte incicial do servidor que irá importar as rotas necessárias
const express = require('express');
const cors = require('cors');
const app = express();


//Pegar a rota dao arquivo de rotas para não ficar poluido
const booksRoute = require('./route/booksRoute');

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.listen(3111);


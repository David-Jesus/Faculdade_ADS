//Arquivo para deixar as rotas que o sistema terá

const express = require('express');
const router = express.Router();
const booksService = require('../service/booksService');

//Rota para dizer onde o sistema vai buscar todos os livros inseridos no banco de dados,
//* o await serve para que o sistema só execute a próxima linha após terminar a execução;
router.get('/books', async function(req, res){
    const books = await booksService.getBooks();
    res.json(books);
});

//Retorno de um livro específico onde o id é o livro específico do banco de dados
router.get('/book/:id', async function (req, res){
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

//Rota para excluir informação do banco de dado através do id passado
router.delete('/book/:id', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman, lá é passado um json para inserir um novo livro
router.put('/book', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const book = req.body;

    //criar o novo livro e salvar na tabela e retornar ao usuário 
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
})

//////////////////////////////////////////////Cliente///////////////////////////////////////////////

//* o await serve para que o sistema só execute a próxima linha após terminar a execução;
//Retorna todos os clientes da tabela
router.get('/clientes', async function(req, res){
    const clientes = await booksService.getClientes();
    res.json(clientes);
});

//Retorno de um cliente específico onde o codigo é o cliente específico do banco de dados
router.get('/cliente/:codigo', async function (req, res){
    const cliente = await booksService.getCliente(req.params.codigo);
    res.json(cliente);
});

//Rota para excluir informação do banco de dado através do codigo passado
router.delete('/cliente/:codigo', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman, lá é passado um json para inserir um novo codigo
router.put('/cliente', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const cliente = req.body;

    //criar o novo 'cliente' e salvar na tabela e retornar ao usuário 
    const newCliente = await booksService.saveCliente(cliente);
    res.json(newCliente);
});


////////////////////////////////////////////////     Pedidos  /////////////////////////////////////////

//Retorna todos os clientes da tabela
router.get('/pedidos', async function(req, res){
    const pedidos = await booksService.getPedidos();
    res.json(pedidos);
});

//Retorno de um cliente específico onde o codigo é o cliente específico do banco de dados
router.get('/pedido/:codigo', async function (req, res){
    const pedido = await booksService.getPedido(req.params.codigo);
    res.json(pedido);
});

//Rota para excluir informação do banco de dado através do codigo passado
router.delete('/pedido/:codigo', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman, lá é passado um json para inserir um novo codigo
router.put('/pedido', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const pedido = req.body;

    //criar o novo 'cliente' e salvar na tabela e retornar ao usuário 
    const newPedido = await booksService.savePedido(pedido);
    res.json(newPedido);
});


//Exportamos a rota para ser visivel em outros arquivos
module.exports = router;
//Este arquivo é onde se encontra a interação com o banco de dados, criando uma variável database
//basta retornar o databe.(invorcar o métod que deseja), nesta situação foi utilizado o 'query' e 'none'

const database = require('../database/database');

//Conexão com o banco onde vai buscar toda informação da tabela
exports.getBooks = function () {
    return database.query('select * from livro ORDER BY codigo ASC');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getBook = function(bookId) {
    return database.query('select * from livro where codigo = $1', [bookId]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado sem retorno de registros
exports.deleteBook = function(bookId){
    return database.none('delete from livro where codigo = $1', [bookId]);
}

//Conexão onde vai se pego um json o parâmetro (book) onde contém dados do livro e é inserido e retorna o objeto criado
exports.saveBook = function(book) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    console.log(book);
    return database.one('insert into livro (codigo, titulo, isbn, quantidade, codigoassunto) values ($1, $2, $3, $4, $5) returning *', [book.codigo, book.titulo, book.isbn, book.quantidade, book.codigoassunto])
}


/////////////////////////////////////////  Cliente ///////////////////////////////////////////////////


//Conexão com o banco onde vai buscar toda informação da tabela
exports.getClientes = function () {
    return database.query('select * from cliente');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getCliente = function(codigo) {
    return database.query('select * from cliente where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado
exports.deleteCliente = function(codigo){
    return database.none('delete from cliente where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (book) onde contém dados do livro e é inserido 
exports.saveCliente = function(cliente) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into cliente (nome, endereco, telefone) values ($1, $2, $3) returning *', [cliente.nome], [cliente.endereco], [cliente.telefone]);
}

/////////////////////////////////////////////////   Pedidos //////////////////////////////////////////////////////

exports.getPedidos = function () {
    return database.query('select * from pedido');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getPedido = function(codigo) {
    return database.query('select * from pedido where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo codigo passado
exports.deletePedido = function(codigo){
    return database.none('delete from pedido where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (pedido) onde contém dados do pedido e é inserido 
exports.savePedido = function(pedido) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into pedido (codigoCliente, dataCompra, valorTotalCompra) values ($1, $2, $3) returning *', [pedido.codigoCliente], [cliente.dataCompra], [cliente.valorTotalCompra]);
}

/////////////////////////////////////////////////   Usuários //////////////////////////////////////////////////////

exports.getUsuarios = function () {
    return database.query('select * from usuario');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getUsuario = function(codigo) {
    return database.query('select * from usuario where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo codigo passado
exports.deleteUsuario = function(codigo){
    return database.none('delete from usuario where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (usuario) onde contém dados do pedido e é inserido 
exports.saveUsuario = function(usuario) {
    return database.one('insert into usuario(email, senha, telefone) values($1, $2, $3) returning *', [ usuario.email, usuario.senha, usuario.telefone]);
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getLogin = function(usuario) {
    return database.query('select * from usuario where email = $1 and senha = $2', [usuario.email, usuario.senha]);
}
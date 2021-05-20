const booksData = require('../data/booksData');


exports.getBooks =  function (){
    return booksData.getBooks();
}

exports.getBook = function (bookId) {
    return booksData.getBook(bookId);
}

exports.deleteBook = function (bookID) {
    return booksData.deleteBook(bookID);
}

exports.saveBook = function (book) {
    return booksData.saveBook(book);
}
//////////////////////////////////////////////Cliente/////////////////////////////////////////////////////////
exports.getClientes =  function (){
    return booksData.getClientes();
}

exports.getCliente = function (codigo) {
    return booksData.getCliente(codigo);
}

exports.deleteCliente = function (codigo) {
    return booksData.deleteCliente(codigo);
}

exports.saveCliente = function (cliente) {
    return booksData.saveCliente(cliente);
}

//////////////////////////////////////////////      Pedidos     /////////////////////////////////////////////////////

exports.getPedidos =  function (){
    return booksData.getPedidos();
}

exports.getPedido = function (codigo) {
    return booksData.getPedido(codigo);
}

exports.deletePedido = function (codigo) {
    return booksData.deletePedido(codigo);
}

exports.savePedido = function (pedido) {
    return booksData.savePedido(pedido);
}
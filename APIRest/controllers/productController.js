require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_PRODUTOS      = process.env.PORTA_BACKEND_PRODUTOS;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResRequestGet = operacoes.sendResRequestGet;
const sendResRequestPost = operacoes.sendResRequestPost;
const sendResRequestPut = operacoes.sendResRequestPut;
const sendResRequestDelete = operacoes.sendResRequestDelete;

// Produtos - GetById
exports.getOne = (req, res) => {        
    const path = sPATH + 'Product/' + req.params.id; 

    httpsRequest(PORTA_BACKEND_PRODUTOS, req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
};

// Produtos - GetAll
exports.getAll = (req, res) => {        
    const path = sPATH + 'Product'; 

    httpsRequest(PORTA_BACKEND_PRODUTOS, req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
};

// Produtos - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Product/';
    const bodyData = req.body;

    httpsRequest(PORTA_BACKEND_PRODUTOS, req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
};

// Produtos - MÉTODO PUT
exports.updateOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Product/' + id;
    const bodyData = req.body;    

    httpsRequest(PORTA_BACKEND_PRODUTOS, req.headers.authorization, 'PUT', path, bodyData, (data, statusCode) => {
        sendResRequestPut(res, data, statusCode)
    });
};


// Produtos - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Product/' + id;
    const bodyData = req.body;

    httpsRequest(PORTA_BACKEND_PRODUTOS, req.headers.authorization, 'DELETE', path, bodyData, (data, statusCode) => {
        sendResRequestDelete(res, data, statusCode)
    });
};

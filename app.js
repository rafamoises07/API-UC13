import express from 'express';

const app = express();

// Define a porta do servidor 
app.listen(3000, () => {
    console.log('Servidor rodando com sucesso na porta 3000')
});

// Excuta o APP
//node app.js
import express from 'express';
import { getUsuarios, loginUsuario } from '../controllers/usuarioController';
import { authenticate } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// Rota para obter todos os usuários (Ncessita de autenticação)
router.get('/', authenticate, getUsuarios);

/* Abaixo teria as outras rotas (Códigos) que são necessárias para uma API, 
também sendo necessario incluir no Controller (POST, PUT, DELETE),
porém na de usuários é somente um "Escopo" de como poderia ser feito*/

export default router;
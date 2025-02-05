import express  from "express";
 
// Importa as rotas
import carroRoutes from "./routes/carroRoutes.js";

// Importar as rotas de usuários
import usuarioRoutes from './routes/usuarioRoutes.js';
 
const app = express();
 
// Permite o Express ler .JSON
app.use(express.json());
 
// Chama as rotas de carros (Estrutura completa do código)
app.use("/carros", carroRoutes);

// Chama as rotas de usuario
app.use("/usarios", usuarioRoutes);
 
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
 
// node app.js
// npx nodemon app.js
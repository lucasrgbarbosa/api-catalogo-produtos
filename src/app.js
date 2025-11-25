import express from 'express';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rota raiz 
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do Catálogo!');
});

app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📦 Rotas de produtos: http://localhost:${PORT}/produtos`);
});
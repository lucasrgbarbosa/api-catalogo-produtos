# API Catálogo de Produtos

API REST com CRUD completo usando Express.js e arquitetura MVC.

## 🚀 Tecnologias

- Node.js
- Express.js
- ES Modules

## 📦 Instalação
```bash
npm install
```

## ▶️ Executar
```bash
npm run dev
```

## 📋 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca produto por ID |
| POST | `/produtos` | Cria novo produto |
| PUT | `/produtos/:id` | Atualiza produto |
| DELETE | `/produtos/:id` | Remove produto |

## 🧪 Exemplo de Uso
```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Notebook","categoria":"Eletrônicos","preco":2500}'
```

## 📁 Estrutura
```
src/
├── models/          # Classes POO
├── controllers/     # Lógica de negócio
├── routes/          # Rotas da API
└── app.js          # Servidor Express
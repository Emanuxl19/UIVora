const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const templateRoutes = require('./routes/template.routes');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// 1) Conecta ao Mongo
connectDB();

// 2) Middlewares
app.use(cors());
app.use(express.json());

// 3) API
app.use('/api/templates', templateRoutes);

// 4) FRONTEND Angular buildado em backend/public/frontend/browser
app.use(express.static(path.join(__dirname, 'public', 'frontend', 'browser')));

// 5) SPA fallback (para rotas do Angular)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'frontend', 'browser', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

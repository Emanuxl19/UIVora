const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Tenta conectar à variável de ambiente ou usa localhost como fallback
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/uivora', {
      // Opções modernas do Mongoose (algumas versões novas já nem precisam disso, mas é seguro manter)
    });

    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro ao conectar no MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
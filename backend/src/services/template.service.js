const Template = require('../models/template.model');

// Buscar todos
exports.findAll = async () => {
  return await Template.find().sort({ createdAt: -1 });
};

// Buscar por ID
exports.findById = async (id) => {
  return await Template.findById(id);
};

// Buscar por categoria
exports.findByCategory = async (category) => {
  return await Template.find({ category }).sort({ createdAt: -1 });
};

// Buscar por tag
exports.findByTag = async (tag) => {
  return await Template.find({ tags: tag }).sort({ createdAt: -1 });
};

// Criar novo
exports.create = async (data) => {
  const template = new Template(data);
  return await template.save();
};

// Inserir vários (Seed)
exports.createMany = async (dataArray) => {
  await Template.deleteMany({});
  return await Template.insertMany(dataArray);
};

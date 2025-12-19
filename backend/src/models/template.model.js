const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['layout', 'component', 'gradient', 'animation', 'glass']
  },
  imageGradient: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  renderHtml: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  compatibility: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Transforma _id em id na hora de retornar o JSON (para facilitar no frontend)
TemplateSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

module.exports = mongoose.model('Template', TemplateSchema);
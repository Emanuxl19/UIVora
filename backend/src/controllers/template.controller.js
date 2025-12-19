const templateService = require('../services/template.service');

// GET /api/templates
exports.getTemplates = async (req, res) => {
  try {
    const templates = await templateService.findAll();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/templates/:id
exports.getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;
    const template = await templateService.findById(id);

    if (!template) {
      return res.status(404).json({ message: 'Template não encontrado.' });
    }

    res.json(template);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/templates/category/:category
exports.getTemplatesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const templates = await templateService.findByCategory(category);

    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/templates/tag/:tag
exports.getTemplatesByTag = async (req, res) => {
  try {
    const { tag } = req.params;
    const templates = await templateService.findByTag(tag);

    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/templates
exports.createTemplate = async (req, res) => {
  try {
    const newTemplate = await templateService.create(req.body);
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST /api/templates/seed
// Endpoint especial para resetar e popular o banco com dados de teste
exports.seedDatabase = async (req, res) => {
  try {
    const mockData = [
      {
        title: 'Neon Glass Card',
        category: 'glass',
        imageGradient:
          'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%), radial-gradient(circle at 50% 0%, #22d3ee20 0%, transparent 50%)',
        description:
          'Card translúcido com borda brilhante e efeito de profundidade.',
        compatibility: ['CSS', 'Tailwind'],
        tags: ['Glassmorphism', 'Dark UI', 'Card'],
        renderHtml:
          '<div class="glass-card"><h3 style="margin:0 0 10px 0; font-size:1.2rem;">Glass UI</h3><p style="margin:0; opacity:0.8;">Passe o mouse.</p></div>',
        code: `.glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; color: white; padding: 24px; transition: all 0.3s ease; } .glass-card:hover { border-color: rgba(34, 211, 238, 0.6); box-shadow: 0 0 30px rgba(34, 211, 238, 0.2); transform: translateY(-5px); }`
      },
      {
        title: 'Cyberpunk Button',
        category: 'component',
        imageGradient:
          'linear-gradient(45deg, #000 25%, #1a1a1a 25%, #1a1a1a 50%, #000 50%, #000 75%, #1a1a1a 75%, #1a1a1a 100%)',
        description: 'Botão de ação com efeito glitch.',
        compatibility: ['CSS', 'React'],
        tags: ['Button', 'Interactive', 'Glitch'],
        renderHtml: '<button class="cyber-btn">SYSTEM_READY</button>',
        code: `.cyber-btn { --primary: #d946ef; font-family: monospace; text-transform: uppercase; background: transparent; color: var(--primary); border: 1px solid var(--primary); padding: 15px 30px; font-weight: bold; position: relative; cursor: pointer; clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%); transition: all 0.2s; } .cyber-btn:hover { background: var(--primary); color: #000; box-shadow: 4px 4px 0px #06b6d4; transform: translate(-2px, -2px); }`
      },
      {
        title: 'Holographic Mesh',
        category: 'gradient',
        imageGradient:
          'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
        description: 'Fundo gradiente animado.',
        compatibility: ['CSS'],
        tags: ['Background', 'Mesh'],
        renderHtml:
          '<div class="mesh-gradient" style="width:100%; height:200px; border-radius:12px; display:flex; align-items:center; justify-content:center;">Mesh Live</div>',
        code: `.mesh-gradient { background-color: #000; background-image: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%); background-size: 150% 150%; animation: meshFlow 8s ease infinite alternate; color: white; } @keyframes meshFlow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`
      }
    ];

    await templateService.createMany(mockData);
    res.json({
      message: 'Banco de dados populado com sucesso!',
      count: mockData.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

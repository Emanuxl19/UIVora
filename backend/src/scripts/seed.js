fetch('http://localhost:3000/api/templates/seed', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log('Sucesso:', data))
  .catch(err => console.error('Erro:', err));
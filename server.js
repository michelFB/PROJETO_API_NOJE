const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }]

// Rota GET para obter todos os usuários
app.get('/', (req, res) => {
  res.send('Sejam bem vindos ao meu primeiro servidor!')
})


// Rota GET para obter todos os usuários
app.get('/users', (req, res) => {
  res.json(users)
})

// Rota GET para obter um usuário específico
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user) {
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
});

// Rota POST para adicionar um novo usuário
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser)
  res.status(201).json(newUser)
});

// Rota PUT para atualizar um usuário existente
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user) {
    user.name = req.body.name;
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
});

// Rota DELETE para remover um usuário
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id))
  res.status(204).send()
});

app.listen(port, () => {
  console.log('Servidor iniciado com sucesso! Server running at http://localhost:${port}/')
});

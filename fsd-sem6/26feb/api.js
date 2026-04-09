const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user=users.find(u => u.id === parseInt(req.params.id));
  if(!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const newUser={
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const user=users.find(u => u.id === parseInt(req.params.id));
  if(!user) return res.status(404).json({ message: "User not found" });
  user.name=req.body.name;
  user.email=req.body.email;
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const userIndex=users.find(u => u.id === parseInt(req.params.id));
  if(userIndex==-1) return res.status(404).json({ message: "User not found" });
  const deletedUser=users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

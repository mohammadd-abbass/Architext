import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Node.js is working!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

import { Request, Response, NextFunction } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const userRoutes = require('../routes/api/user.routes');

const app = express();

app.use(cors()); 
app.use(bodyParser.json());

app.use('/api/users', userRoutes);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;

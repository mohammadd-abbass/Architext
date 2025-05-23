
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRoutes from '../routes/api/auth.routes.js';
import aiRoutes from '../routes/api/ai.routes.js';
import playgroundRoutes from '../routes/api/playground.routes.js';

const app = express();

app.set('trust proxy', true);
app.use(cors()); 
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/playground', playgroundRoutes);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;

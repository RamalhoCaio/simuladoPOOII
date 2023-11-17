import express from 'express';
import dotenv from 'dotenv';
import UsuarioRouter from './routes/UsuarioRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import LanceRouter from './routes/LanceRoutes';

dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });

const app = express();
app.use(express.json());
app.use('/api', UsuarioRouter);
app.use('/api', LeilaoRouter);
app.use('/api', LanceRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log('Fail to load environment');
}

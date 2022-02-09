import express from 'express';
import { Database } from './database/database.service';

(async () => {
  const app = express();
  const PORT = 8000;

  // Database
  const db = new Database('../db.sqlite');
  await db.init();

  app.get('/', (req, res) => res.send('Express + TypeScript Server'));

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
})();

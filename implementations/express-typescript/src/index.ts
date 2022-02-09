import express from 'express';
import { createUser } from './auth.service';
import { Database } from './database/database.service';

(async () => {
  const app = express();
  const PORT = 3000;

  // Database
  const db = new Database('../db.sqlite');
  await db.init();

  // Middleware
  app.use(express.json());

  // Routes
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));

  // Auth
  app.post('/auth/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('Missing email or password');
    }

    try {
      const user = createUser(email, password, db);
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
})();

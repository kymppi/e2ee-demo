import express from 'express';
import { createUser, getUser } from './auth.service';
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

    const user = await createUser(email, password, db);

    if (user == 'User already exists')
      return res.status(400).send('User already exists');

    return res.status(200).send(user);
  });

  app.get('/user/:email', async (req, res) => {
    const { email } = req.params;

    if (!email) {
      return res.status(400).send('Missing email');
    }

    const user = await getUser(email, db);

    if (!user) return res.status(404).send('User does not exist');

    return res.status(200).send(user);
  });

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
})();

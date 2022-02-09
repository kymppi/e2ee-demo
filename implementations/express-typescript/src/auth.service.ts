import { Database } from './database/database.service';

export const createUser = async (
  email: string,
  password: string,
  database: Database
) => {
  // Check if user already exists
  const user = await getUser(email, database);

  if (user) {
    return 'User already exists';
  }

  //IMPORTANT: Don't store the password in plain text, hash it, but in this case this should not be used in production
  // Create new user
  await database.exec(
    `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
  );

  const newUser = await getUser(email, database);

  console.log(newUser);

  return newUser;
};

export const getUser = async (email: string, database: Database) => {
  const user = await database.get(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  return user;
};

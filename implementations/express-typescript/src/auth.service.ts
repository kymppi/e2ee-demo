import { Database } from './database/database.service';

export const createUser = async (
  email: string,
  password: string,
  database: Database
) => {
  // Check if user already exists
  const user = await database.get(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  if (user) {
    return 'User already exists';
  }

  //IMPORTANT: Don't store the password in plain text, hash it, but in this case this should not be used in production
  // Create new user
  const newUser = await database.exec(
    `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
  );

  console.log(newUser);

  return newUser;
};

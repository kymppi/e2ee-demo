import { Database as Sqlite3 } from 'sqlite3';

export class Database {
  db: Sqlite3 | null;

  constructor(filePath: string) {
    this.db = new Sqlite3(filePath, (err) => {
      if (err == null) return;
      console.error('[Database] Error opening database', err);
      this.db = null;
    });
  }

  async init() {
    if (this.db == null) throw new Error('Database not initialized');

    console.log('[Database] Connected to sqlite database');

    // Create users table
    // await this.exec(`
    //   CREATE TABLE IF NOT EXISTS users (
    //     email TEXT NOT NULL PRIMARY KEY,
    //     password TEXT NOT NULL
    //   )
    // `);
  }

  async close() {
    if (this.db == null) throw new Error('Database not initialized');

    this.db.close((err) => {
      if (err == null) return;
      console.error('[Database] Error closing database', err);
    });

    console.log('[Database] Closed sqlite database');
  }

  async get(sql: string) {
    if (this.db == null) throw new Error('Database not initialized');

    return new Promise((resolve, reject) => {
      this.db!.all(sql, (err, rows) => {
        if (err == null) return resolve(rows);
        console.error('[Database] Error executing query', err);
        reject(err);
      });
    });
  }

  async exec(sql: string) {
    if (this.db == null) throw new Error('Database not initialized');

    return new Promise((resolve, reject) => {
      this.db!.run(sql, function (error) {
        if (error == null) return resolve(true);
        console.error('[Database] Error executing query', error);
        reject(error);
      });
    });
  }
}

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
  }

  async close() {
    if (this.db == null) throw new Error('Database not initialized');

    this.db.close((err) => {
      if (err == null) return;
      console.error('[Database] Error closing database', err);
    });

    console.log('[Database] Closed sqlite database');
  }
}

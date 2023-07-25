import pg from 'pg';
const { Pool } = pg;
const PG_URI = 'postgres://sbriubrv:aIs4KnZbZN2OEorES0P__OhbstItGngq@mahmud.db.elephantsql.com/sbriubrv';


const pool = new Pool({
    connectionString: PG_URI
});

export default {
  query: (text: string, params?: number[]) => {
    return pool.query(text, params);
  }
}
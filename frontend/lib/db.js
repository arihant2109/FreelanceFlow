import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.NEXT_PUBLIC_DB_USER,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    port: Number(process.env.NEXT_PUBLIC_DB_PORT),
});

export default pool;
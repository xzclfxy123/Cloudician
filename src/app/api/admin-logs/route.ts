import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.split(' ')[1];

  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [rows] = await pool.query(`
      SELECT username, ip_address, timestamp
      FROM admin_login_logs
      ORDER BY timestamp DESC
      LIMIT 10
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching admin logs:', error);
    return NextResponse.json({ error: 'Failed to fetch admin logs' }, { status: 500 });
  }
}


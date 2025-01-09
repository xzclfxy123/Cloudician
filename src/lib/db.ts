/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql, { RowDataPacket } from "mysql2/promise";
import bcrypt from 'bcryptjs';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

export async function createConnection() {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
  });
}

export interface StakingPlatform {
  id: number;
  name: string;
  logo_url: string;
  reward_min: number;
  reward_max: number;
  is_active: boolean;
  synopsis: string;
  commission: number;
  unbonding: string;
  reward: string;
  validator_address: string;
  block_explorer: string;
  about: string;
  resources: string;
  staking_guide_title: string;
  staking_guide: string;
  full_guide: string;
  staking_guide_worth: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export async function getStakingPlatforms(): Promise<StakingPlatform[]> {
  const [rows] = await pool.execute(
    "SELECT * FROM staking_platforms WHERE is_active = true ORDER BY sort_order ASC"
  );
  
  return rows as StakingPlatform[];
}

export async function createStakingPlatform(
  platform: Omit<StakingPlatform, 'id' | 'is_active'>
): Promise<StakingPlatform> {
  const resources = parseUrls(platform.resources);
  const stakingGuide = parseStakingGuide(platform.staking_guide);

  const [result] = await pool.execute(
    `INSERT INTO staking_platforms 
    (name, logo_url, reward_min, reward_max, sort_order, is_active, synopsis, commission, unbonding, reward, validator_address, block_explorer, about, resources, staking_guide_title, staking_guide, full_guide, staking_guide_worth) 
    VALUES (?, ?, ?, ?, ?, true, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      platform.name,
      platform.logo_url,
      platform.reward_min,
      platform.reward_max,
      platform.sort_order,
      platform.synopsis,
      platform.commission,
      platform.unbonding,
      platform.reward,
      platform.validator_address,
      platform.block_explorer,
      platform.about,
      JSON.stringify(resources),
      platform.staking_guide_title,
      JSON.stringify(stakingGuide),
      platform.full_guide,
      platform.staking_guide_worth,
    ]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { id: insertId, ...platform, is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
}

function parseUrls(resources: string): string[] {
  const cleanedResources = resources.replace(/，/g, ',');

  const urlArray = cleanedResources.split(',').map(url => url.trim());

  return urlArray.filter(url => isValidHttpsUrl(url));
}
function isValidHttpsUrl(url: string): boolean {
  const regex = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9\-._~:?#%&//=]*)*/;
  return regex.test(url);
}

function parseStakingGuide(guide: string): string[] {
  const cleanedGuide = guide.replace(/；/g, ';');

  const guideArray = cleanedGuide.split(';').map(guide => guide.trim());

  return guideArray;
}

export async function updateStakingPlatform(
  id: number,
  platform: Partial<StakingPlatform>
): Promise<boolean> {
  const [result] = await pool.execute(
    "UPDATE staking_platforms SET ? WHERE id = ?",
    [platform, id]
  );
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

export async function deleteStakingPlatform(id: number): Promise<boolean> {
  const [result] = await pool.execute(
    "UPDATE staking_platforms SET is_active = false WHERE id = ?",
    [id]
  );
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

export async function getUserCount(): Promise<number> {
  const [rows] = await pool.execute("SELECT COUNT(*) as count FROM users");
  return (rows as any)[0].count;
}

export async function verifyAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  const [rows] = await pool.query(
    "SELECT * FROM administrators WHERE username = ?",
    [username]
  );
  if (Array.isArray(rows) && rows.length > 0) {
    const admin = rows[0] as any;
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    return isPasswordValid;
  }
  return false;
}

export async function fetchPlatformsName(name: string) {
  try {
    const [rows] = await pool.execute(
      `SELECT * 
      FROM staking_platforms 
      WHERE is_active = true 
      AND name = ?
      `, [name]
    );

    const platforms = rows as RowDataPacket[];

    if (!platforms.length) {
      throw new Error('Platform not found');
    }

    return platforms[0]
  } catch (error) {
    console.error("Error fetching platforms:", error);
    throw error;
  }
}

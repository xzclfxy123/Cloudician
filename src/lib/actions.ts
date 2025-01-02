'use server'

import { createConnection } from './db'

interface UserInfo {
  id: number
  name: string
  company: string
  email: string
  created_at: Date
}

export async function getUsers(): Promise<{ users: UserInfo[], userCount: number }> {
  try {
    const connection = await createConnection()
    
    const [rows] = await connection.execute(`
      SELECT id, name, company, email, messages, created_at
      FROM users
      ORDER BY created_at DESC
    `)
    
    await connection.end()
    
    const userCount = (rows as UserInfo[]).length;  // 计算用户数量
    return { users: rows as UserInfo[], userCount }
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw new Error('Failed to fetch users')
  }
}

export async function addUser(formData: FormData): Promise<void> {
  const name = formData.get('name') as string
  const company = formData.get('company') as string
  const email = formData.get('email') as string
  const messages = formData.get('messages') as string

  try {
    const connection = await createConnection()
    
    await connection.execute(
      `INSERT INTO users (name, company, email, messages) 
       VALUES (?, ?, ?, ?)`,
      [name, company, email, messages]
    )

    await connection.end()

    
  } catch (error) {
    console.error('Failed to add user:', error)
    throw new Error('Failed to add user')
  }
}

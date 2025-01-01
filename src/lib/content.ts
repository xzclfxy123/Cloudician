import fs from 'fs/promises'
import path from 'path'

const contentPath = path.join(process.cwd(), 'data', 'content.json')

export async function getContent() {
  try {
    const content = await fs.readFile(contentPath, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    console.error('Error reading content:', error)
    return { title: '', description: '' }
  }
}

export async function updateContent(title: string, description: string) {
  const content = JSON.stringify({ title, description })
  await fs.writeFile(contentPath, content)
}


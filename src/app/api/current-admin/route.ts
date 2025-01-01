import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1] || ''
  const username = await getCurrentUser(token)

  if (username) {
    return NextResponse.json({ username })
  } else {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
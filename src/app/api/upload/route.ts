import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueId = crypto.randomBytes(16).toString('hex');
    const extension = file.name.split('.').pop();
    const filename = `${uniqueId}.${extension}`;
    
    const path = join(process.cwd(), 'public/uploads', filename);
    await writeFile(path, buffer);
    
    return NextResponse.json({ 
      url: `/uploads/${filename}` 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}


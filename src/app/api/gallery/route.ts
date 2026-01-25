import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const galleryDir = path.join(process.cwd(), 'public', 'gallery');

        // Check if directory exists
        if (!fs.existsSync(galleryDir)) {
            return NextResponse.json({ images: [] });
        }

        const files = fs.readdirSync(galleryDir);

        // Filter for image files
        const images = files.filter(file =>
            /\.(jpg|jpeg|png|webp|svg)$/i.test(file)
        ).map(file => `/gallery/${file}`);

        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error reading gallery directory:', error);
        return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
    }
}

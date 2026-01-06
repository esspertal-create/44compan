
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { locale, originalText, newText } = await req.json();

    if (!locale || !originalText || !newText) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Locale file not found' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const messages = JSON.parse(fileContent);
    let updated = false;

    // Helper to traverse and update
    const updateNested = (obj: any): any => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          updateNested(obj[key]);
        } else if (typeof obj[key] === 'string') {
          // Normalize strings to ignore excessive whitespace differences if needed, 
          // but valid JSON content should match exactly.
          // However, innerText from DOM might contain \n or different spacing.
          // Let's try exact match first, then trimmed.
          
          if (obj[key] === originalText) {
            obj[key] = newText;
            updated = true;
          }
        }
      }
    };

    updateNested(messages);

    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
      return NextResponse.json({ success: true, message: 'Content updated' });
    } else {
      // Fallback: Try with trimmed text
      const updateNestedTrimmed = (obj: any): any => {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              updateNestedTrimmed(obj[key]);
            } else if (typeof obj[key] === 'string') {
              if (obj[key].trim() === originalText.trim()) {
                obj[key] = newText;
                updated = true;
              }
            }
          }
      }
      
      updateNestedTrimmed(messages);
      
      if (updated) {
         fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
         return NextResponse.json({ success: true, message: 'Content updated (trimmed match)' });
      }

      return NextResponse.json({ success: false, message: 'Original text not found' }, { status: 404 });
    }

  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { locale, originalText, newText } = await req.json();

    console.log(`[UpdateContent] ========== UPDATE REQUEST ==========`);
    console.log(`[UpdateContent] Locale: ${locale}`);
    console.log(`[UpdateContent] Original: "${originalText}"`);
    console.log(`[UpdateContent] New:      "${newText}"`);

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
    let foundKey = "";

    // Aggressive normalization
    const normalize = (str: string) => {
      return str
        .replace(/\s+/g, ' ') // Collapse spaces
        .trim()
        .toLowerCase() // Case insensitive
        .replace(/[\u2018\u2019]/g, "'") // Smart quotes
        .replace(/[\u201C\u201D]/g, '"') // Smart quotes
        .replace(/\u00A0/g, ' '); // Non-breaking space
    };

    const searchTarget = normalize(originalText);

    // Track partial matches for substring replacement
    let partialMatchKey = "";
    let partialMatchObj: any = null;
    let partialMatchKeyName = "";
    let partialMatchOriginalValue = "";

    const updateNested = (obj: any, pathStr: string = ''): any => {
      if (updated) return; // Already found a match
      
      for (const key in obj) {
        if (updated) return;
        
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          updateNested(obj[key], pathStr ? `${pathStr}.${key}` : key);
        } else if (typeof obj[key] === 'string') {
          const currentVal = obj[key];
          const currentNormalized = normalize(currentVal);

          // 1. Exact case-sensitive match (Best)
          if (currentVal === originalText) {
            console.log(`[UpdateContent] Exact match: ${pathStr}.${key}`);
            obj[key] = newText;
            foundKey = `${pathStr}.${key}`;
            updated = true;
            return;
          }

          // 2. Normalized match 
          if (currentNormalized === searchTarget) {
            console.log(`[UpdateContent] Normalized match: ${pathStr}.${key}`);
            console.log(`[UpdateContent] File:   "${currentNormalized}"`);
            console.log(`[UpdateContent] Client: "${searchTarget}"`);
            obj[key] = newText;
            foundKey = `${pathStr}.${key}`;
            updated = true;
            return;
          }

          // 3. Check if original text is a substring (for split text like title.split(' ')[0])
          // Case-sensitive substring check first
          if (currentVal.includes(originalText) && originalText.length >= 3 && !partialMatchKey) {
             console.log(`[UpdateContent] Substring match (case-sensitive): ${pathStr}.${key} -> "${currentVal}" contains "${originalText}"`);
             partialMatchKey = `${pathStr}.${key}`;
             partialMatchObj = obj;
             partialMatchKeyName = key;
             partialMatchOriginalValue = currentVal;
          }
          // Case-insensitive substring check
          else if (currentNormalized.includes(searchTarget) && searchTarget.length >= 3 && !partialMatchKey) {
             console.log(`[UpdateContent] Substring match (normalized): ${pathStr}.${key} -> "${currentVal}" contains "${originalText}"`);
             partialMatchKey = `${pathStr}.${key}`;
             partialMatchObj = obj;
             partialMatchKeyName = key;
             partialMatchOriginalValue = currentVal;
          }
        }
      }
    };

    updateNested(messages);

    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
      return NextResponse.json({ success: true, message: `Updated key: ${foundKey}` });
    }

    // If no exact match but found a substring match, do a substring replacement
    if (partialMatchKey && partialMatchObj) {
      console.log(`[UpdateContent] Performing substring replacement in ${partialMatchKey}`);
      console.log(`[UpdateContent] Original value: "${partialMatchOriginalValue}"`);
      
      // Replace the substring within the larger string
      const updatedValue = partialMatchOriginalValue.replace(originalText, newText);
      console.log(`[UpdateContent] Updated value: "${updatedValue}"`);
      
      partialMatchObj[partialMatchKeyName] = updatedValue;
      fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
      
      return NextResponse.json({ 
        success: true, 
        message: `Updated substring in key: ${partialMatchKey}` 
      });
    }

    console.warn(`[UpdateContent] No match found.`);
    return NextResponse.json({ 
        success: false, 
        message: 'Original text not found in translation files.' 
    }, { status: 404 });

  } catch (error) {
    console.error('[UpdateContent] Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

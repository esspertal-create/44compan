
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Pencil, Check, X, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export function EditModeToggle() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDev, setIsDev] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  // Only show edit mode in development
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost');
  }, []);

  const handleElementClick = useCallback((e: MouseEvent) => {
    if (!isEditMode) return;

    // Don't trigger if clicking the toggle button itself
    if ((e.target as HTMLElement).closest('#edit-mode-toggle')) return;

    const target = e.target as HTMLElement;
    
    // Only allow editing on elements that contain direct text, not nested elements with their own text
    // This prevents grabbing concatenated text from parent containers
    const hasDirectTextOnly = (el: HTMLElement): boolean => {
      // Check if element has only text nodes as children (no nested elements with text)
      for (const child of Array.from(el.childNodes)) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          const childEl = child as HTMLElement;
          // If child element has text content, this parent should not be editable
          if (childEl.textContent && childEl.textContent.trim().length > 0) {
            return false;
          }
        }
      }
      return true;
    };

    // Check if element has text content and is a leaf text node
    if (target.textContent && target.textContent.trim().length > 0 && hasDirectTextOnly(target)) {
      e.preventDefault();
      e.stopPropagation();

      const originalText = target.textContent; // Use textContent for raw text
      target.contentEditable = 'true';
      target.style.outline = '2px solid #2563eb'; // blue-600 outline
      target.focus();

      const handleBlur = async () => {
        target.contentEditable = 'false';
        target.style.outline = '';
        
        const newText = target.textContent || ""; // Use textContent

        if (originalText !== newText) {
          setIsSaving(true);
          try {
            console.log('Sending update:', { locale, originalText, newText });
            const response = await fetch('/api/update-content', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                locale,
                originalText,
                newText
              }),
            });

            const data = await response.json();
            
            if (response.ok) {
              console.log('Saved:', data.message);
              // Trigger a refresh to update server components or re-fetch
              router.refresh();
            } else {
              console.error('Failed to save:', data.message);
              // Revert on failure? Or just alert.
              alert(`Failed to save changes: ${data.message}`);
              target.textContent = originalText;
            }
          } catch (err) {
            console.error(err);
            target.textContent = originalText;
          } finally {
            setIsSaving(false);
          }
        }
        
        target.removeEventListener('blur', handleBlur);
        target.removeEventListener('keydown', handleEnter);
      };

      const handleEnter = (k: KeyboardEvent) => {
          if (k.key === 'Enter') {
              k.preventDefault();
              target.blur();
          }
      }

      target.addEventListener('blur', handleBlur);
      target.addEventListener('keydown', handleEnter);
    }
  }, [isEditMode, locale, router]);

  useEffect(() => {
    if (isEditMode) {
      document.addEventListener('click', handleElementClick, true); // Capture phase
      document.body.classList.add('cursor-text');
    } else {
      document.removeEventListener('click', handleElementClick, true);
      document.body.classList.remove('cursor-text');
    }

    return () => {
      document.removeEventListener('click', handleElementClick, true);
      document.body.classList.remove('cursor-text');
    };
  }, [isEditMode, handleElementClick]);

  // Don't render on production
  if (!isDev) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2"
      id="edit-mode-toggle"
    >
      {isSaving && (
        <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
            <Loader2 className="h-3 w-3 animate-spin" />
            Saving...
        </div>
      )}
      
      <button
        onClick={() => setIsEditMode(!isEditMode)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all
          ${isEditMode 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}
        `}
      >
        {isEditMode ? (
          <>
            <Check className="h-4 w-4" />
            <span className="font-medium text-sm">Done Editing</span>
          </>
        ) : (
          <>
            <Pencil className="h-4 w-4" />
            <span className="font-medium text-sm">Edit Text</span>
          </>
        )}
      </button>
    </div>
  );
}

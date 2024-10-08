import { useEffect, useRef } from 'react';

export default function FocusTrap({ children }) {
  const startRef = useRef(null);

  useEffect(() => {
    const focusableElements = startRef.current.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);

    firstElement.focus();

    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, []);

  return <div ref={startRef}>{children}</div>;
}

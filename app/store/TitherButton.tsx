'use client';

import { useEffect, useRef } from 'react';

export default function TitherButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // 1. Clear out any previous empty container states
      containerRef.current.innerHTML = '';
      
      // 2. Build the precise data target matching your tither.us configuration
      const buttonTarget = document.createElement('div');
      
      buttonTarget.setAttribute('data-tither-org', 'give');         // Changed from "tither" to your real org slug "give"
      buttonTarget.setAttribute('data-tither-tech', 'tither-tech'); // Added your actual campaign handle "tither-tech"
      buttonTarget.setAttribute('data-button-text', 'Give Now');
      buttonTarget.setAttribute('data-color', '#7c3aed');
      
      containerRef.current.appendChild(buttonTarget);
    }

    // 3. Inject the loader engine script
    const script = document.createElement('script');
    script.src = 'https://tither.us';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="tither-widget-container py-16 flex justify-center bg-neutral-50 border-t border-border min-h-[60px]" 
    />
  );
}

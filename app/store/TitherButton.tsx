'use client'; // This directive stays safe here isolated from metadata

import { useEffect } from 'react';

export default function TitherButton() {
  useEffect(() => {
    // Dynamically inject the script only on the client side
    const script = document.createElement('script');
    script.src = 'https://tither.us';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script asset when leaving the page
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tither-widget-container py-16 flex justify-center bg-neutral-50 border-t border-border"> 
      <div 
        data-tither-org="tither-tech" 
        data-tither-tech="" 
        data-button-text="Give Now" 
        data-color="#7c3aed" 
      />
    </div>
  );
}

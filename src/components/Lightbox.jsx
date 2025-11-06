
import React from 'react';

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="flex justify-end mb-2">
          <button 
            onClick={onClose}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[calc(90vh-60px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
        
        {alt && (
          <div className="mt-3 text-center text-white text-sm sm:text-base opacity-90">
            {alt}
          </div>
        )}
      </div>
    </div>
  );
}

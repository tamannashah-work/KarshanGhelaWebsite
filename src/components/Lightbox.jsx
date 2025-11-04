
import React from 'react';

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="mb-4 bg-white rounded px-3 py-1">Close</button>
        <img src={src} alt={alt} className="w-full h-auto rounded shadow-lg" />
      </div>
    </div>
  );
}

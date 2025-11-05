
import React from 'react';

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className=" m-auto w-3/4 h-3/4 rounded-md fixed inset-0 z-50 bg-white flex items-center justify-center pb-5 shadow-2xl" onClick={onClose}>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="mx-4 bg-amber-700 text-white rounded px-4 py-1 shadow-md">Close</button>
        <img src={src} alt={alt} className="w-3/5 h-auto rounded shadow-lg mx-auto" />
      </div>
    </div>
  );
}

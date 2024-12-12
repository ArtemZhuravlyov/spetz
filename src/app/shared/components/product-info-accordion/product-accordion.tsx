'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const ProductAccordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full py-4 text-left text-lg font-bold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="py-4 text-gray-700">{children}</div>}
    </div>
  );
};

export default ProductAccordion;

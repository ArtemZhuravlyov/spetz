'use client';

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarsProps {
  rating: number; // Rating value (e.g., 4.5)
  reviews?: number; // Optional number of reviews
  className?: string; // Optional additional class names for styling
}

const StarsComponent: React.FC<StarsProps> = ({ rating, reviews, className = '' }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`full-${index}`} />
          ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
      </div>
    );
  };

  return (
    <div className="flex items-center space-x-2">
      {renderStars()}
      {reviews !== undefined && (
        <span className="text-sm text-gray-600">({reviews} reviews)</span>
      )}
    </div>
  );
};

export default StarsComponent;

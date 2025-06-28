import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const baseStyles = 'border border-gray-200 rounded-lg shadow-md p-6';
  const combinedClasses = `${baseStyles} ${className}`;

  return <div className={combinedClasses.trim()}>{children}</div>;
}
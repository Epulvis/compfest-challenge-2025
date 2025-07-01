import React from 'react';

interface IconProps {
  iconName: string;
  className?: string;
}

export default function Icon({ iconName, className = '' }: IconProps) {
  const combinedClasses = `material-symbols-outlined ${className}`;

  return (
    <span className={combinedClasses}>
      {iconName}
    </span>
  );
}
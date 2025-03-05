import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, id }) => {
  return (
    <h2 
      id={id} 
      className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
    >
      {children}
    </h2>
  );
};

export default SectionHeading;

import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-bold text-dark-blue text-[22px] md:text-[28px] mb-3">
      {children}
    </h1>
  );
};

export default Title;

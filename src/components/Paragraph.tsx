import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="text-light-blue text-[15px] md:text-[16px] mb-5">
      {children}
    </p>
  );
};

export default Paragraph;

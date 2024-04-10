import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-light-blue p-4 md:p-0">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-[320px] md:max-w-[400px] text-center">
        {children}
      </div>
    </div>
  );
};

export default Container;

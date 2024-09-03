import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="font-bold bg-gray-50 p-[10px] rounded-xl shadow-md  transform active:scale-90 transition-all "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

import React from 'react';

type AppProps = {
  classTitle: string;
  onClick?: () => void;
  children: any;
  type?: string;
};

const Button = ({ children, onClick, classTitle }: AppProps) => {
  return (
    <button className={classTitle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

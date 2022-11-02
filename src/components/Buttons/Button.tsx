import React from 'react';

type AppProps = {
  classTitle: string;
  onClick?: () => void;
  children: any;
  type?: string;
};

const Button = ({ children, onClick, classTitle }: AppProps) => {
  return (
    <React.Fragment>
      <button className={classTitle} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;

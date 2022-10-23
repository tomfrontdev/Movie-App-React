import React from "react";

const Button = ({ children, onClick, classTitle }) => {
  return (
    <React.Fragment>
      <button className={classTitle} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;

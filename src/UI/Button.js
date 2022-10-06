import React from "react";
import btn from "../UI/Button.module.css";

const Button = ({ children, onClick, classTitle }) => {
  return (
    <React.Fragment>
      <button className={`${btn.Btn} ${classTitle}`} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;

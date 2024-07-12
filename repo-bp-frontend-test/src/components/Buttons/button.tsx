import React from "react";
import "./button.css";

interface Props {
    title: string;
    action: () => void;
    disabled?: boolean;
    type: 'primary' | 'secondary' | 'pagination';
  }
  
  export const Button: React.FC<Props> = ({
    title,
    action,
    disabled,
    type  
  }) => {
  
    const buttonClass = {
      primary: 'primary-button',
      secondary: 'secondary-button',
      pagination: ''
    };
  
    const getClassNames = () => {
      let classNames = buttonClass[type];
  
      if(disabled) {
        classNames += ' disabled-button';
      }
  
      return classNames;
    }
  
    return (
      <button
        className={getClassNames()}
        disabled={disabled}
        onClick={action}  
      >
        {title}
      </button>
    );
  }
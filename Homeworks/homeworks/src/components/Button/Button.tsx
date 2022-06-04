import React from 'react';
import './Button.css';
import buttonIcon from './icon.png';
import './Button.css';
import User from '../User/User';

interface IButtonProps {
  title: string;
  disabled: boolean;
  onClickHandler: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className="user-button"
      disabled={props.disabled}
      onClick={props.onClickHandler}
    >
      <img src={buttonIcon} alt="btnICon" />
      <User title={props.title} />
    </button>
  );
};

export default Button;

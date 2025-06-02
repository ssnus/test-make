import React, { useState } from "react";
import styled from './Button.module.scss';
import '../style/main.scss';

export default function Button({ onClick }) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    setDisabled(true); 
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={styled.button}
      onClick={handleClick}
      disabled={disabled}
    >
      Отправить
    </button>
  );
}

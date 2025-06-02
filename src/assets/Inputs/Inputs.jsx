import React, { useState } from "react";
import styled from './Inputs.module.scss';
import '../style/main.scss';

export default function Inputs() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(validateEmail(value));
    }
  };

  return (
    <div className={styled.inputs}>
      <input
        id="email"
        type="email"
        className={`
          ${styled.inputs__input} 
          ${!isValid ? styled.inputs__invalid : ""}
          ${email ? styled.inputs__hasValue : ""}
        `}
        value={email}
        onChange={handleChange}
        placeholder="Введите email"
      />
      {!isValid && (
        <div className={styled.inputs__error}>
          Пожалуйста, введите корректный email
        </div>
      )}
    </div>
  );
}

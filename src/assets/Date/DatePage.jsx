import React from 'react';
import styled from './DatePickerInput.module.css';

export default function DatePickerInput({ value, onClick, placeholder, darkMode = false }) {
  return (
    <div
      className={`${styled.datepicker__input} ${darkMode ? styled.dark : ''}`}
      onClick={onClick}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly
        className={styled.datepicker__field}
      />
      <span className={styled.datepicker__icon}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.91667 1.66707H7.5V0.83374H6.66667V1.66707H3.33333V0.83374H2.5V1.66707H2.08333C1.62083 1.66707 1.25 2.04207 1.25 2.50041V8.33374C1.25 8.79207 1.62083 9.16707 2.08333 9.16707H7.91667C8.375 9.16707 8.75 8.79207 8.75 8.33374V2.50041C8.75 2.04207 8.375 1.66707 7.91667 1.66707ZM7.91667 8.33374H2.08333V3.75041H7.91667V8.33374ZM2.70833 5.41707C2.70833 4.84207 3.175 4.37541 3.75 4.37541C4.325 4.37541 4.79167 4.84207 4.79167 5.41707C4.79167 5.99207 4.325 6.45874 3.75 6.45874C3.175 6.45874 2.70833 5.99207 2.70833 5.41707Z"
            fill={darkMode ? "#aab8ff" : "#4B7CDD"}
          />
        </svg>
      </span>
    </div>
  );
}


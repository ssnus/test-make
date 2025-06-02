import React, { useState, useRef, useEffect } from 'react';
import styled from './DropdownSimple.module.scss';

export default function DropdownSimple() {
  const options = [
    { value: '', label: 'Выберите что-нибудь', disabled: true },
    { value: 'option1', label: 'Рыжий кот' },
    { value: 'option2', label: 'Белый кот' },
    { value: 'option3', label: 'Черный кот' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    if (!option.disabled) {
      setSelected(option);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styled.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={styled.dropdown__toggle}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selected.label}
        <span className={`${styled.dropdown__arrow} ${isOpen ? styled.dropdown__up : styled.dropdown__down}`} />
      </button>

      {isOpen && (
        <ul className={styled.dropdown__list} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected.value === option.value}
              className={`${styled.dropdown__option} ${option.disabled ? styled.dropdown__disabled : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

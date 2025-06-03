import React, { useState } from 'react';
import styles from './Boxs.module.scss';

export default function Boxs() {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const [radioValue, setRadioValue] = useState();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes(prev => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <>
        <div className={styles.boxs}>
            <ul className={styles.boxs__list}>
                <li className={styles.boxs__item}>
                    <label className={`${styles.boxs__container} p_16`}>
                        Выбери меня
                        <input
                        type="checkbox"
                        name="option1"
                        checked={checkboxes.option1}
                        onChange={handleCheckboxChange}
                        />
                        <span className={styles.boxs__checkmark}></span>
                    </label>
                </li>
                <li className={styles.boxs__item}>
                     <label className={`${styles.boxs__container} p_16`}>
                        Выбери меня
                        <input
                        type="checkbox"
                        name="option2"
                        checked={checkboxes.option2}
                        onChange={handleCheckboxChange}
                        />
                        <span className={styles.boxs__checkmark}></span>
                    </label>
                </li>
                <li className={styles.boxs__item}>
                     <label className={`${styles.boxs__container} p_16`}>
                        Птица счастья завтрашнего дня
                        <input
                        type="checkbox"
                        name="option3"
                        checked={checkboxes.option3}
                        onChange={handleCheckboxChange}
                        />
                        <span className={styles.boxs__checkmark}></span>
                    </label>
                </li>
            </ul>
            <ul className={styles.boxs__itemRadio}>
                <li className={styles.boxs__listRadio}>
                    <label className={`${styles.boxs__container} p_16`}>
                        Пластмассовый мир победил
                        <input
                        type="radio"
                        name="radioGroup"
                        value="option1"
                        checked={radioValue === 'option1'}
                        onChange={handleRadioChange}
                        />
                        <span className={styles.boxs__radiomark}></span>
                    </label>
                </li>
                <li className={`${styles.boxs__container} p_16`}>
                    <label className={styles.container}>
                        Макет оказался сильней
                        <input
                        type="radio"
                        name="radioGroup"
                        value="option2"
                        checked={radioValue === 'option2'}
                        onChange={handleRadioChange}
                        />
                        <span className={styles.boxs__radiomark}></span>
                    </label>
                </li>
                <li className={`${styles.boxs__container} p_16`}>
                    <label className={styles.container}>
                        Последний кораблик остыл
                        <input
                        type="radio"
                        name="radioGroup"
                        value="option3"
                        checked={radioValue === 'option3'}
                        onChange={handleRadioChange}
                        />
                        <span className={styles.boxs__radiomark}></span>
                    </label>
                </li>
            </ul>
        </div>
    </>
  );
}

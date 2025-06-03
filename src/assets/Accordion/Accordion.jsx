import React, { useState } from 'react';
import styled from './Accordion.module.scss';

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styled.accordion}>
        <ul className={styled.accordion__list}>
            <li className={styled.accordion__item}>
                <div
                    className={styled.accordion__buttons}
                    onClick={() => setOpen((prev) => !prev)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                        setOpen((prev) => !prev);
                        }
                    }}
                    >
                    <button
                        className={styled.accordion__button}
                        aria-expanded={open}
                    >
                        <span className={`${styled.accordion__span} p_16`}>Открой меня</span>
                    </button>
                    <span className={open ? styled.accordion__arrowOpen : styled.accordion__arrow}>&#9660;</span>
                </div>
                <div className={open ? styled.accordion__panelOpen : styled.accordion__panel}>
                    <p className={`${styled.accordion__des} p_16`}>
                        ОКАК
                    </p>
                </div>
            </li>
        </ul>
      </div>
  );
}
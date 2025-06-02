import React, { useState } from 'react';
import '../style/main.scss';
import styled from './Burger.module.scss';
import Logo from '../image/Logo.png';
import Photo from '../image/Menu.jpg';

export default function Burger() {
  const [open, setOpen] = useState(false); 

  return (
    <>
      <button
        className={`${styled.header__burger_button} ${styled.burger_button}`}
        aria-label="open menu"
        title="open menu"
        onClick={() => setOpen(true)}  
      >
        <span className={styled.burger_button__line}></span>
        <span className={styled.burger_button__line}></span>
        <span className={styled.burger_button__line}></span>
      </button>

      {/* Контейнер бургера (меню) */}
      {open && (
        <div className={styled.burger__overlay}>
          <div className={styled.burger__container}>
            {/* Левая часть */}
            <div className={styled.burger__left}>
                <img src={Logo} alt="Logo" className={styled.burger__icon} />
                <div className={styled.burger__info}>
                       <span className={`${styled.burger__status} p_14`}>
                            Задание выполнила
                        </span>
                        <h2 className={`${styled.burger__name} h2`}>
                            Шахова <br />Алина Андреевна
                        </h2>
                        <p className={`${styled.burger__desc} p_16`}>
                            Заканчиваю 4й курс Кемеровского горонтехноческого техникума им.Кожевина В.Г. по специальности "Информационные системы и программирование". Владею базово React, JS, стилями CSS и SASS, версткой и адаптивом.
                        </p>
                        <a href="tel: +79132901416" className={styled.burger__phone}>
                            89132901416
                        </a>
                        <a   href="https://t.me/fx_ssnus"
                            className={styled.burger__social}
                            target="_blank"
                            rel="noopener noreferrer">
                            Телеграмм
                        </a>
                </div>
              
            </div>
            {/* Правая часть (картинка) */}
            <div className={styled.burger__right}>
              <button
                className={styled.burger__close}
                aria-label="close menu"
                title="close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <img
                src={Photo}
                alt="Menu"
                className={styled.burger__image}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Accordion from '../Accordion/Accordion';
import Boxs from '../Boxs/Boxs';
import Button from '../Button/Button';
import DropdownSimple from '../DropdownSimple/DropdownSimple';
import Header from '../Header/Header';
import Inputs from '../Inputs/Inputs';
import '../style/main.scss';
import styled from './HomePage.module.scss';
import React from 'react';

export default function HomePage(){
    return(
        <>
            <section className={styled.test}>
                <div className="container">
                    <Header/>
                    {/* Заголовки и текст */}
                    <ul className={styled.test__item}>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Заголовок H1
                            </span>
                            <h1 className={`${styled.test__title} h1`}>
                                Котик огромный
                            </h1>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Заголовок H2
                            </span>
                            <h2 className={`${styled.test__title} h2`}>
                                Котик большой
                            </h2>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Заголовок H3
                            </span>
                            <h3 className={`${styled.test__title} h3`}>
                                Котик средний
                            </h3>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Заголовок H4
                            </span>
                            <h4 className={`${styled.test__title} h4`}>
                                Котик маленький
                            </h4>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Лид
                            </span>
                            <p className={`${styled.test__title} lead`}>
                                Кот
                            </p>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Крупный текст
                            </span>
                            <p className={`${styled.test__title} p_18`}>
                                Крупый кот
                            </p>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Основной текст
                            </span>
                            <p className={`${styled.test__title} p_16`}>
                                Кот основной
                            </p>
                        </li>
                        <li className={styled.test__list}>
                            <span className={styled.test__span}>
                                Вспомогательный текст
                            </span>
                            <p className={`${styled.test__title} p_14`}>
                                Кот вспомогательный
                            </p>
                        </li>
                    </ul>
                    <Inputs/>
                    <DropdownSimple/>
                    <Button/>
                    <Boxs/>
                    <Accordion/>
                </div>
            </section>
        </>
    )
}
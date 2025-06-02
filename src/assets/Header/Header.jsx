import React from 'react';
import Logo from '../image/Logo.png'
import styled from './Header.module.scss'
import '../style/main.scss';
import Burger from '../Burger/Burger';

export default function Header(){
    return(
        <>
            <header className={styled.header}>
                <div className={styled.header__logo}>
                    <img src={Logo} alt="Logo" className={styled.header__icon} />
                    <p className={styled.header__name}>
                        Шахова <br/> Алина Андреевна
                    </p>
                </div>
                <Burger/>
            </header>
        </>
    )
}
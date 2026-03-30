import React from 'react';
import Logo from './logo/Logo';
import Menus from './menus/Menus';
import cardIcon from "../../assets/products/shopping-cart.png"
import ButtonPrimary from '../ui/ButtonPrimary';
const Header = ({ className }) => {
    return (
        <header className={`${className} h-15 flex justify-between items-center px-3`}>
            <Logo />
            <Menus />
            <div className='buttons flex justify-center items-center gap-3'>
                <button type='button' className='cursor-pointer'><img src={cardIcon} alt="" /></button>
                <button type='button' className='cursor-pointer'>login</button>
                <ButtonPrimary type='default'>Get Started</ButtonPrimary>
            </div>
        </header>
    );
};

export default Header;
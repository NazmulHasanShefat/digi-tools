import Logo from './logo/Logo';
import Menus from './menus/Menus';
import cardIcon from "../../assets/products/shopping-cart.png"
import ButtonPrimary from '../ui/ButtonPrimary';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
const Header = ({ className }) => {
    const {selectedProduct} = useContext(UserContext)
    return (
        <header className={`${className} h-15 flex justify-between items-center px-3`}>
            <Logo />
            <Menus />
            <div className='buttons flex justify-center items-center gap-3'>
                <button type='button' className='cursor-pointer relative'><img src={cardIcon} width={20} height={20} alt="" />
                 <span className='px-2 py-0.5 bg-red-500 text-sm absolute text-white top-[-16px] right-[-15px] rounded-full'>{selectedProduct.length}</span>
                </button>
                <button type='button' className='cursor-pointer'>login</button>
                <ButtonPrimary type='default'>Get Started</ButtonPrimary>
            </div>
        </header>
    );
};

export default Header;
import React, { useContext } from 'react';
import ButtonPrimary from '../../../ui/ButtonPrimary';
import { UserContext } from '../../../../context/UserContext';
import CartListItem from './CartListItem';
import { toast } from 'react-toastify';

const SelectedCartList = () => {
    const { selectedProduct, total, setTotal, setSelectedProduct } = useContext(UserContext);
    const handleCheckout = ()=>{
      setSelectedProduct([]);
      setTotal(0);
      toast.success("you are successfully checkout")
    }
    return (
        <div className="w-full min-h-screen lg:px-0 px-5">
          <ul className="list rounded-box shadow-md w-full">
            {selectedProduct.length <= 0 ?
            <h1 className='text-center text-3xl '>Cart is empty</h1>:
            selectedProduct.map((item, index)=>  <CartListItem item={item} key={index}/>)
            }
          
          </ul>
          <div className='flex justify-between items-center w-full'>
            <p>Total</p>
            <strong>${total}</strong>
          </div>
          <div className="w-full flex justify-center items-center">
          <ButtonPrimary onclickfn={handleCheckout} type="default" className={`w-[50%] hover:w-[52%] transition-[width] duration-200 active:scale-95 mt-10`}>
            Checkout
          </ButtonPrimary>
          </div>

        </div>
    );
};

export default SelectedCartList;
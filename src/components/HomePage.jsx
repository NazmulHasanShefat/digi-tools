import React, { useState } from 'react';
import Header from './header/Header';
import HeroSection from './main/heroSection/HeroSection';
import RatingSection from './main/ratingsSection/RatingSection';
import ToolsSection from './main/toolsSection/ToolsSection';
import { UserContext } from '../context/UserContext';
import { ToastContainer } from 'react-toastify';
import GetStartSection from './main/GetStartSection/GetStartSection';
import PricingSection from './main/pricingSection/PricingSection';
import BottomBannar from './main/BottomBannar/BottomBannar';
import FooterSection from './main/featuresSection/FooterSection';
import FooterSecend from './main/featuresSection/FooterSecend';

const HomePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [total, setTotal] = useState(0);
    return (
        <>
        <UserContext.Provider value={{ selectedProduct, setSelectedProduct, total, setTotal }}>
            <Header className={`max-w-300 mx-auto`}/>
            <HeroSection className={`max-w-300 mx-auto`}/>
            <RatingSection />
            <ToolsSection className={`max-w-300 mx-auto`}/>
             <ToastContainer />
             <GetStartSection className={`max-w-300 mx-auto`} />
             <PricingSection className={`max-w-300 mx-auto`}/>
             <BottomBannar />
             <FooterSection />
             <FooterSecend />
        </UserContext.Provider>
        </>
    );
};

export default HomePage;
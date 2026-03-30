import React, { useState } from 'react';
import Header from './header/Header';
import HeroSection from './main/heroSection/HeroSection';
import RatingSection from './main/ratingsSection/RatingSection';
import ToolsSection from './main/toolsSection/ToolsSection';
import { UserContext } from '../context/UserContext';

const HomePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [total, setTotal] = useState(0);
    return (
        <>
        <UserContext.Provider value={{ selectedProduct, setSelectedProduct, total, setTotal }}>
            <Header className={`max-w-[1200px] mx-auto`}/>
            <HeroSection className={`max-w-[1200px] mx-auto`}/>
            <RatingSection />
            <ToolsSection className={`max-w-[1200px] mx-auto`}/>
        </UserContext.Provider>
        </>
    );
};

export default HomePage;
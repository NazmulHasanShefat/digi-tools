import React from 'react';
import Header from './header/Header';
import HeroSection from './main/heroSection/HeroSection';
import RatingSection from './main/ratingsSection/RatingSection';
import ToolsSection from './main/toolsSection/ToolsSection';

const HomePage = () => {
    return (
        <>
        <Header className={`max-w-[1200px] mx-auto`}/>
        <HeroSection className={`max-w-[1200px] mx-auto`}/>
        <RatingSection />
        <ToolsSection className={`max-w-[1200px] mx-auto`}/>
        </>
    );
};

export default HomePage;
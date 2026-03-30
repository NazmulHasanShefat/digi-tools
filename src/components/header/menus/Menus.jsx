import React from 'react';
const menuLinks = [
    {title: "Features", href: "/Features"},
    {title: "Products", href: "/products"},
    {title: "Pricing", href: "/Pricing"},
    {title: "Testimonials", href: "/Testimonials"},
    {title: "FAQ", href: "/FAQ"}
]
const Menus = () => {
    return (
        <nav className='primary-menu hidden lg:block'>
            <ul className='navigation flex justify-center items-center gap-3'>
                {menuLinks.map((link,index)=>{
                    return <li key={index}><a href={link.href}>{link.title}</a></li>
                })}
            </ul>
        </nav>
    );
};

export default Menus;
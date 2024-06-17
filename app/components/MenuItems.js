import React, { useState, useEffect } from 'react';

const MenuItems = ({ setIsOpen }) => {
    const [activeSection, setActiveSection] = useState('');
    const menuItems = [
        { name: 'home', link: 'home' },
        { name: 'projects', link: 'projects' },
        { name: 'aboutMe', link: 'about' },
        { name: 'contactMe', link: 'contact' },
    ];
    
    const handleScroll = (e, link) => {
        e.preventDefault();
        if (window.matchMedia('(max-width: 700px)').matches) {
            setIsOpen(false);
        }
        const targetElement = document.getElementById(link);
        if (targetElement) {
            const offset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(link);
        }
    };

    const handleScrollEvent = () => {
        const offset = 100; // Adjust this value to match your fixed topbar height
        let found = false;
        menuItems.forEach(item => {
            const targetElement = document.getElementById(item.link);
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                if (elementPosition <= offset && elementPosition >= -offset && !found) {
                    setActiveSection(item.link);
                    found = true;
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <>
            {menuItems.map((item) => (
                <a
                    href={`#${item.link}`}
                    key={item.name}
                    className={`mr-12 text-xl md:text-sm transition-all hover:delay-50 ease-in-out ${
                        activeSection === item.link ? 'font-bold' : 'hover:font-bold'
                    }`}
                    onClick={(e) => handleScroll(e, item.link)}
                >
                    <span className="text-purple">#</span>{item.name}
                </a>
            ))}
        </>
    );
};

export default MenuItems;

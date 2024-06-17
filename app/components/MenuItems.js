const MenuItems = ({setIsOpen}) => {
    const menuItems = [{
        name: 'home',
        link:'home'
    },
    {
        name: 'projects',
        link:'projects'
    },
    {
        name: 'aboutMe',
        link:'about'
    },
    {
        name: 'contactMe',
        link:'contact'
    }
    ]
    const handleScroll = (e, link) => {
        e.preventDefault();
        {if(window.matchMedia('(max-width: 768px)').matches){
            setIsOpen(false);
        }}
        const targetElement = document.getElementById(link);
        if (targetElement) {
            const offset = 100; // Adjust this value to match your fixed topbar height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return(
    <>
        {menuItems.map((items) => {
            return(
                <a href={`#${items.link}`} key={items.name}
                    className="mr-12 text-xl md:text-sm hover:font-bold transition-all hover:delay-50 ease-in-out"
                    onClick={(e) => handleScroll(e, items.link)}
                >
                    <span className="text-purple">#</span>{items.name}
                </a>
            )
        })}
    </>
    )
}

export default MenuItems;
const MenuItems = () => {
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
    return(
    <>
        {menuItems.map((items) => {
            return(
                <a href={`#${items.link}`} key={items.name}
                    className="mr-12 text-xl md:text-sm hover:font-bold transition-all hover:delay-50 ease-in-out"
                >
                    <span className="text-purple">#</span>{items.name}
                </a>
            )
        })}
    </>
    )
}

export default MenuItems;
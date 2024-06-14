import MenuItems from "./MenuItems";
import { useTheme } from "next-themes";

export default function MenuDrawer() {

    const{theme} = useTheme();

    return (
        <div className={`w-screen h-screen 
        ${theme=='dark'?'bg-black/90':'bg-white/90'}
        z-20 absolute top-0 left-0 flex flex-col pl-14 justify-center gap-12`}>
            <MenuItems />
        </div>
    );
}
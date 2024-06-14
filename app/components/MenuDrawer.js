import MenuItems from "./MenuItems";

export default function MenuDrawer() {
    return (
        <div className="w-screen h-screen z-20 absolute top-0 left-0 flex flex-col pl-14 justify-center gap-12 bg-black/90">
            <MenuItems />
        </div>
    );
}
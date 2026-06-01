import { useState } from 'react';
import Header from './header';
import Main from './main';
import Dock from './dock';
import { Home, Package, Settings, User } from "lucide-react";


const dockItems = [
    {
        icon: <Home size={22} />,
        label: "Home",
        onClick: () => console.log("Home clicked"),
    },
    {
        icon: <Package size={22} />,
        label: "Product",
        onClick: () => console.log("Product clicked"),
    },
    {
        icon: <Settings size={22} />,
        label: "Setting",
        onClick: () => console.log("Setting clicked"),
    },
    {
        icon: <User size={22} />,
        label: "Profile",
        onClick: () => console.log("Profile clicked"),
    },
];

function AppLayuot() {
    const [search, setSearch] = useState<string>('');

    return (
        <>
            <Header  search={search} setSearch={setSearch} />
            <Main search={search} />
            <div >
                <Dock items={dockItems} className=' bottom-0 fixed text-black' />
            </div>


        </>
    );
}

export default AppLayuot;

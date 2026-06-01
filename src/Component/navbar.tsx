import { useState } from "react";

type SubItem = {
  label: string;
  link: string;
};

type MenuItem = {
  title: string;
  items: SubItem[];
};

const menuData: MenuItem[] = [
  {
    title: "خدمات",
    items: [
      { label: "طراحی سایت", link: "#" },
      { label: "فرانت‌اند", link: "#" },
      { label: "بک‌اند", link: "#" },
    ],
  },
  {
    title: "محصولات",
    items: [
      { label: "اپلیکیشن موبایل", link: "#" },
      { label: "داشبورد ادمین", link: "#" },
      { label: "سیستم فروش", link: "#" },
    ],
  },
  {
    title: "درباره ما",
    items: [
      { label: "تیم ما", link: "#" },
      { label: "تماس با ما", link: "#" },
    ],
  },
];

 const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <header className="w-full font-mono text-xm text-gray-800 px-6 py-4 hidden  md:flex justify-evenly gap-x-5 items-center">
    

      <nav className="flex gap-8 relative">
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenMenu(index)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-gray-300">{menu.title}</button>

            {openMenu === index && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg p-3 w-40 transition-all">
                <ul className="flex flex-col gap-2">
                  {menu.items.map((sub, i) => (
                    <li
                      key={i}
                      className="hover:bg-gray-200 p-2 rounded cursor-pointer"
                    >
                      {sub.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};
export default Navbar;
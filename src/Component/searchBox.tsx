import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

type SearchProps = {
    search: string;
    setSearch: (value: string) => void;
};

const SearchBox = ({ search, setSearch }: SearchProps) => {
    const [open, setOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

  
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);


    return (
        <div ref={searchRef} className={`flex items-center  transition-all duration-300 bg-white border rounded-[50px] overflow-hidden ${open ? " outline outline-sky-400 w-45 px-2 md:w-105" : "w-10 px-2 h-10 justify-center"}`}>
            <button
                onClick={() => setOpen(!open)}
                className="p-1 rounded-full cursor-pointer shrink-0"
            >
                <FiSearch size={20} color="gray" />
            </button>

            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`outline-none bg-transparent transition-all duration-300 ${open ?" opacity-100 w-full ml-2" : "opacity-0 w-0"}`}
            />
        </div>
    );
};

export default SearchBox;
import Magnet from './Magnet'
import { Default } from './defult';
import { FiSearch } from "react-icons/fi";

type Props = {
  text: string;
  search:string;
setSearch:string}



const Header = ({ text , search, setSearch}: Props) => {
  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          flex justify-between items-center
          px-6 py-3 m-2
          rounded-[50px]
          w-full
          bg-white/20 backdrop-blur-md
          border border-gray-200
        "
      >
        <Magnet padding={100} disabled={false} magnetStrength={10}>
          <h1 className="text-gray-800 font-extrabold font-mono">
            {text}
          </h1>
        </Magnet>

        <div className="relative w-full max-w-xs mx-4">
          <FiSearch
            size={20}
            color="gray"
            className="absolute inset-y-2.5 left-3 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search"
            className="
              bg-white w-full rounded-3xl p-2 pl-10 border
               focus:outline outline-sky-500
            "
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

        {/* آیکون بسکت — روی دسکتاپ هید میشه */}
        <div className="block md:hidden">
          <Default />
        </div>
      </header>

      {/* فاصله برای اینکه محتوا زیر هدر نره */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;
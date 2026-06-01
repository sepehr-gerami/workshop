
import { BiMoon } from "react-icons/bi";
// import { FiSun } from 'react-icons/fi';
import Navbar from './navbar';
import SearchBox from './searchBox';
import CustomBackdrop from './CustomBackdrop';
import type { Dispatch, SetStateAction } from 'react';
import GradientText from './GradientText'


type HeaderProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};


const Header = ({ search, setSearch }: HeaderProps) => {


  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          flex justify-between items-center
          px-2  mx-2 my-2 
          rounded-[50px]
          bg-white/20 backdrop-blur-md
          border border-gray-200
        "
      >

        <div className="block md:hidden">
          <CustomBackdrop />
        </div>




        <GradientText
          colors={["#70052c", "#d86c21", "#a5a1a1"]}
          animationSpeed={4}
          showBorder={false}
          className="custom-class"
        >
        Figma ti code!
        </GradientText>



        <div className="hidden md:flex">
          <Navbar />
        </div>


        <div className="flex items-center gap-3 ">
          <SearchBox search={search} setSearch={setSearch} />

          <button className='bg-gray-200/40 backdrop-blur-2xl p-2 rounded-full cursor-pointer hover:bg-gray-300/40 transition-colors'>
            <BiMoon size={22} color="#4b5563" />
          </button>

        </div>
      </header>

      <div className="h-24"></div>
    </>
  )
}
export default Header;
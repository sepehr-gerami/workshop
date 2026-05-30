import Magnet from './Magnet'
import { Default } from './defult';
import { Input } from "@heroui/react";
import { FiSearch } from "react-icons/fi";

type Props = {
  text: string
}




const Header = ({ text }: Props) => {

  return (

    <>
      <header className=" flex justify-between m-2 rounded-[50px] items-center px-6 py-4  bg-gray-100 border border-gray-200">

        <Magnet padding={100} disabled={false} magnetStrength={10}>
          <h1 className=" text-gray-800 font-extrabold font-mono">{text}</h1>
        </Magnet>
        <div className='relative  max-w-sm'>
         <FiSearch size={20} color="gray" className='absolute inset-y-2 inset-x-2 flex items-center pointer-events-none' />
        <Input className=' rounded-4xl placeholder:px-5 ' placeholder='Search'/>
        </div>
      

        <Default />
      </header>
    </>
  );
};

export default Header;
import Getdata from "./getdata";
import CircularGallery from './CircularGallery'

type MaineProps = {
  search: string;
};

function Main({ search }: MaineProps) {
  return (

    <>

      <div style={{ height: '', position: 'relative' }} className="w-full h-45 bg-gray-300/50 rounded-2xl ">
        <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02}
          bend={0.5}
          borderRadius={0.18}
          scrollSpeed={4.4}
          scrollEase={0.05}
        />

      </div>

      <Getdata search={search} />
    </>
  )
}

export default Main;

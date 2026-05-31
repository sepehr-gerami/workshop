import { useState } from "react";
import Header from "./Component/header";
import Maine from "./Component/maine";
import Getdata from "./Component/getdata";

// import Hero from "./Component/Hero";


function App() {
 const[search, setSearch]= useState('')
  return (
   <><Header text={'work Shope'} search = {search} setSearch = {setSearch} />
   <Getdata search = {search}/>
   <Maine/>
   {/* <Hero /> */}
   </>
  )
}

export default App
import { useEffect, useState } from 'react';
import { WithIcons } from "./WithIcons";


export type GetdataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function Getdata({search}:{search:string}) {
 
  const [newData, setNewdata] = useState<GetdataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endPoint = 'https://fakestoreapi.com/products';
      const response = await fetch(endPoint);
      const Productdata: GetdataProps[] = await response.json();
      setNewdata(Productdata);
    };

    fetchData();
  }, []);
  const filtered = newData.filter((product)=>{
    if (!product.title) return false;
    if (!search) return true
   return  product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  })

  return (
    <div >

      {filtered.map((product) => (
        <div key={product.id} className="border p-4 mb-4 rounded-lg text-xs text-left font-mono text-shadow-xl">
          <img src={product.image} alt={product.title} className="w-24 h-24 object-contain" />
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p>{product.price} $</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <WithIcons />
        </div>
      ))}



    </div>
  );
}

export default Getdata;

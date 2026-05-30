import { useEffect, useState } from 'react';
import  {WithIcons}  from "./WithIcons";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function Getdata() {
  const [newData, setNewdata] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endPoint = 'https://fakestoreapi.com/products';
      const response = await fetch(endPoint);
      const Productdata: Product[] = await response.json();
      setNewdata(Productdata);
    };

    fetchData();
  }, []);

  return (
    <div>
      {newData.map((product) => (
        <div key={product.id} className="border p-4 mb-4 rounded-lg">
          <img src={product.image} alt={product.title} className="w-24 h-24 object-contain" />
          <h2 className="font-bold">{product.title}</h2>
          <p>{product.price} $</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        <WithIcons/>
        </div>
      ))}
   
    </div>
  );
}

export default Getdata;

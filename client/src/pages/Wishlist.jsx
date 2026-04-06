import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Wishlist() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchWishlist = async () => {

      try {

        const response = await axios.get("/product/wishlist");

        setProducts(response.data);

      } catch (err) {
        
        toast.error(err.message);

      } finally {
        setLoading(false);
      }

    };

    fetchWishlist();

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Wishlist</h1>

      {products.map((product) => (
        <div key={product.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>

          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>

        </div>
      ))}
    </div>
  );
}










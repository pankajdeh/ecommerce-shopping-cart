import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
 
  async function fetchProductData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL)
      const data = await res.json();
      setPosts(data);
      console.log("helo")
      console.log(data)
      
    }
    catch(error){
      console.log("error aagya hai");
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect ( ()=> {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner/> :
        posts.length > 0 ?
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grd-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10  ">
          {
            posts.map((post)=>(
              <Product key={post.id} post= {post} />
            ) )
          }
        </div>)
        : <div>
          <p>No Data found</p>
        </div>
      } 
    </div>
  );

};

export default Home;


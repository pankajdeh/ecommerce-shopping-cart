import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem"



const Cart = () => {


  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  // cart ko humne initiall data= [] tha , toh humhe cart ko excess krne ke liye useSelector ka use krna padega 

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect ( () =>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price , 0 )
    );
  }, [cart])
 
  return(
    <div className="max-w-[2000px] mx-auto  ">
      {
        cart.length > 0 ?
        (<div className="flex w-[1300px] mx-auto space-x-32">
          <div className="">
            {
              cart.map((item,index) =>{
                return <CartItem key={item.id} item= {item} itemIndex = {index} />
              })
            }
          </div>

          <div className="flex flex-col ">

            <div className="text-black-700 font-semibold text-sm mt-10">Your Cart</div>
            <div className=" font-bold text-green-700  mt-2 mb-2 text-3xl leadind-loose  ">Summery</div>
            <p>
              <span className="text-black-700 font-semibold  text-sm ">Total Items : {cart.length}</span>
            </p>

            <div className=" mt-20">
              <p className="text-black-700 font-semibold  text-lg"> Total Amount : {totalAmount}</p>
              <button className="bg-green-700 mt-4 p-3 rounded-full text-white font-bold w-full  hover:bg-green-900">CheckOut Now</button>
            </div>

          </div>

          
          

        </div>) :
        (<div className="flex justify-center items-center flex-col ">
          <h1 className="mt-9 text-black font-bold ">Cart Empty</h1>
          <Link to ={"/"}>
          <button className="bg-green-700 mt-4 p-3 rounded-full text-white font-bold w-full  hover:bg-green-900 ">Shop Now</button>
          </Link>
        </div>)
      }
    </div>
  )
};

export default Cart;

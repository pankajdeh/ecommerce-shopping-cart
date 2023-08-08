import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice"


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
      dispatch( remove(item.id));
      toast.success("item Removed")
  }

  return (
  <div className="  w-[600px] mx-auto m-5 pl-10 ">
    <div className=" flex p-5 ml-10  space-x-9  ">

      <div className="h-[150px]">
        <img className="w-[200px] h-full"  alt="" src = {item.image}/>
      </div>

      <div className="right">
        <h1 className="text-gray-900 font-bold text-xl  ">{item.title}</h1>
        <h1 className="mt-5">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
        <div className="flex justify-between items-center ">
          <p className="mt-5 text-green-600 font-bold ">${item.price}</p>

          <div className="bg-red-500 h-6 w-6 flex justify-center items-center rounded-full hover:bg-red-800 hover:scale-1  " 
          onClick={removeFromCart}><FcDeleteDatabase/>
          </div>

        </div>
        
      </div>

    </div>
    <hr class=" h-0.5 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"></hr>
  </div>
  
  );
};

export default CartItem;

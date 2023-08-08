import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (

    <div >
      <nav className ="flex justify-between items-center h-20 max-w-6xl mx-auto" >
        <NavLink to ="/">
          <div className=''>
        <img src="../logo.png" alt="" className='h-14' />
          </div>
        </NavLink>
        
        <div className='flex item-center font-large text-slate-200 mr-5 space-x-6'>
          <NavLink to ="/">
            <div><p>Home</p></div>
          </NavLink>

          <NavLink to = "/cart"> 
          <div className='relative '>
            <FaShoppingCart className='text-2xl'/>
          {
            cart.length > 0 &&
            <span
            className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center item-center animate-bounce rounded-full text-white '
            >{cart.length}</span>
          }
          </div>
            
           </NavLink>
          
        </div>
      </nav>
    
    </div>
    )
};

export default Navbar;

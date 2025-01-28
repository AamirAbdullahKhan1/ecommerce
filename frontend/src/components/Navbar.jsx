import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}>
            <img src="/XTKLogo.png" alt="logo"  className='w-[45px] max-sm:w-[30px]'/>
        </Link>

        <ul className='hidden sm:flex gap-5 text-[16px] text-gray-700 space-x-5'>
            <NavLink to='/' className= "flex flex-col items-center gap-1">
                <p className="">HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to='/collection' className= "flex flex-col items-center gap-1">
                <p className="">COLLECTIONS</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to='/about' className= "flex flex-col items-center gap-1">
                <p className="">ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to='/contact' className= "flex flex-col items-center gap-1">
                <p className="">CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img onClick={()=> setShowSearch(true)} src={assets.search_icon} alt="search_icon" className='w-5 cursor-pointer' />
          <div className="group relative">
              <Link to={'/login'}><img src={assets.profile_icon} alt="profile_icon" className="w-5 cursor-pointer" /></Link>
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 border-2 border-slate-400 shadow-lg rounded-lg">
                      <p className="cursor-pointer hover:text-black">My Profile</p>
                      <hr className='bg-black h-[2px]'/>
                      <p className="cursor-pointer hover:text-black">Orders</p>
                      <hr className='bg-black h-[1px]'/>
                      <p className="cursor-pointer hover:text-black">Logout</p>
                  </div>
              </div>
          </div>
          <Link  to='/cart' className="relative"> 
              <img src={assets.cart_icon} alt="cart_icon" className="w-5 min-w-5 cursor-pointer" />
              <p className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">{getCartCount()}</p>
              {/*<p className="absolute right-[-5px] bottom-[-5px] w-4 leading-4 text-center bg-black text-white aspect-square text-[8px] rounded-full">0</p>*/}
          </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu_icon" className='w-5 cursor-pointer sm:hidden' />
        </div>

        {/*SideBar Menu => Smaller Screens...*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
              <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img src={assets.dropdown_icon} alt="dropdown_icon" className='h-4 rotate-180' />
                <p>Back</p>
              </div>
              <NavLink onClick={() => setVisible(false)} to='/' className="py-2 pl-6 border">HOME</NavLink>
              <NavLink onClick={() => setVisible(false)} to='/collection' className="py-2 pl-6 border">COLLECTION</NavLink>
              <NavLink onClick={() => setVisible(false)} to='/about' className="py-2 pl-6 border">ABOUT</NavLink>
              <NavLink onClick={() => setVisible(false)} to='/contact' className="py-2 pl-6 border">CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
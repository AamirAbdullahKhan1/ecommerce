import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className="items-center inline-flex justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input type="text" placeholder='Search...' className="flex-1 outline-none bg-inherit text-sm" value={search} onChange={(e)=> setSearch(e.target.value)} />
            <img src={assets.search_icon} alt="" className="w-4" />
        </div>
        <img src={assets.cross_icon} alt="" className="" />
    </div>
  ) : null
}

export default SearchBar
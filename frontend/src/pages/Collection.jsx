import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const {products, search , showSearch} = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false)
  const [filterProducts, setFilterProducts] = useState(products)
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState('relavent')

  const toggleCateogry = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
  
  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = ()=> {
    let fpCopy = filterProducts.slice()

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price-b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price-a.price)))
        break;
      
      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products)
  },[])

  useEffect(() => {
    sortProducts()
  },[sortType])

  useEffect(()=> {
    applyFilter()
  },[category,subCategory,search,showSearch])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Filter Options*/}
      <div className="min-w-60">
        <p onClick={() => setShowFilters(!showFilters)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : '' }`} alt="" />
        </p>
        {/*Category Filter*/}
        <div className= {`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Men'} onChange={toggleCateogry} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCateogry} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Kids'} onChange={toggleCateogry} /> Kids
            </p>
          </div>
        </div>
        {/*Subcategory Filter*/}
        <div className= {`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*Product Display*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 ">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/*Sort By*/}
          <select onChange={(e)=>setSortType(e.target.value)} name="" id="" className='border-2 outline-none border-gray-300 text-sm px-2 cursor-pointer'>
            <option value="relavent" className="cursor-pointer">Sort By: Relavent</option>
            <option value="low-high" className="cursor-pointer">Sort By: Low to High</option>
            <option value="high-low" className="cursor-pointer">Sort By: High to Low</option>
          </select>
        </div>
        {/*Product Cards*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item,index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Collection
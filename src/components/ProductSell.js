import React from 'react'
import { FaSearch } from 'react-icons/fa'
import abstract from '../Assets/Abstract.jpg'
import illustrated from '../Assets/illustrated.jpg'

const ProductSell = () => {

  const product = [
    {
      id : 1,
      img : abstract,
      title:"Abstrsct 3D",
      desc: "This is the first product",
      stock:32,
      price:45.99,
      totalSales:20
    },
    {
      id : 2,
      img : illustrated,
      title:"Sarphens Illustration",
      desc: "This is the second product",
      stock:32,
      price:45.99,
      totalSales:20
    },
  ];


  return (
    <div className='flex justify-center items-center my-6'>
        <div className=' rounded-xl p-3 bg-white w-11/12 '>
            <div className='flex items-center justify-between mx-4'>
                <span className='lg:text-lg text-sm font-bold'>Product Sell</span>
                <div className='flex gap-x-4'>
                <div className='flex items-center bg-slate-100 lg:h-[30px] h-[25px] lg:w-auto w-[100px] rounded'>
                <FaSearch className='bg-slate-100 h-[20px] ml-2'/>
                <input className='border-0 h-auto w-full outline-none bg-slate-100' placeholder = 'search...' />
                </div>
                <select name="days" id="days" className='bg-slate-100 w-[40px] lg:w-auto text-xs text-slate-400 rounded-md'>
                    <option value="Last30days" placeholder='Last 30 days'>Last 30 days</option>
                </select>
                </div>
            </div>
            <div className='flex items-center justify-between mx-4 my-4 text-xs text-slate-400'>
                <span>Product Name</span>
                <div className='flex gap-x-24 opacity-0 lg:opacity-100'>
                    <span>Stock</span>
                    <span>Price</span>
                    <span>Total Sales</span>
                </div>
            </div>
            <div className='w-full h-[1px] bg-slate-400 m-0 p-0'></div>
            <div className="grid grid-rows-2 gap-8 gap-x-auto px-0 lg:px-4 my-8">
      {product.map(({ id,img,title,desc,stock,price,totalSales}) => (
        <div key={id}>
          
        <div className='flex flex-col lg:flex-row items-center mx-auto lg:justify-between text-xm'>
            <div className='flex justify-center items-center lg:w-auto gap-x-6'>
              <img src = {img} alt={title} className='h-[45px] w-[75px] rounded-lg'/>
                <div className='flex flex-col items-start'>
                <span className='font-extrabold'>{title}</span>
                <span className='text-xs text-slate-400'>{desc}</span>
            </div>
            </div>
            <div className='flex gap-x-20 ml-2 text-xs lg:text-base mt-5 lg:mt-0 opacity-100 lg:opacity-0 text-slate-400'>
                    <span>Stock</span>
                    <span>Price</span>
                    <span>Total Sales</span>
            </div>
            <div className='flex gap-x-16 lg:gap-x-20 mr-4 text-xs lg:text-base'>
                    <span>{stock} in stock</span>
                    <span className='font-bold'>$ {price}</span>
                    <span>{totalSales}</span>
            </div>
        </div>
        </div>
      ))}
      </div>
        </div>
    </div>
  )
}

export default ProductSell
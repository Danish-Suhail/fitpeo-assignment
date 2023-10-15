import React from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const Grids = () => {

  const grids = [
    {
      id: 1,
      //SVG for Earning
      src: <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="40" fill="#F1F8E9"/>
            <circle cx="40" cy="40" r="30" fill="#008000"/>
            <circle cx="40" cy="40" r="25" fill="#F1F8E9"/>
            <text x="28" y="54" font-size="40" fill="#008000">$</text>
          </svg>,
      title: "Earnings",
      amount: "$198K" ,
      profit: true,
      percentage: "37.8%"
    },
    {
      id: 2,
      //SVG for tab
      src: <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 200 150">
      {/* <!-- iPad body --> */}
      <circle cx="100" cy="80" r="95" fill="#8884d8"/>

      <rect x="30" y="10" width="140" height="130" rx="10" ry="10" fill="#333" />
    
      {/* <!-- Screen --> */}
      <rect x="40" y="20" width="120" height="90" rx="5" ry="5" fill="#8884d8" />
      <rect x="48" y="24" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="72" y="24" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="96" y="24" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="120" y="24" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="52" y="38" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="76" y="38" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="100" y="38" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="48" y="52" width="20" height="9" rx="5" ry="5" fill="#37474F" />
      <rect x="72" y="52" width="20" height="9" rx="5" ry="5" fill="#37474F" />
    
    
    
      {/* <!-- Home button --> */}
      <circle cx="100" cy="115" r="5" fill="#333" />
    </svg>,
      title: "Orders",
      amount: "$2.4K" , 
      profit: false,
      percentage: "2%"
    },
    {
      id: 3,
      //SVG for wallet
      src: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" viewBox="0 0 100 70">
      {/* <!-- Bag body --> */}
      <rect x="20" y="10" width="60" height="40" rx="5" ry="5" fill="#795548" />
    
      {/* <!-- Bag flap --> */}
      <path d="M20,10 L50,30 L80,10 Z" fill="#8D6E63" />
    
      {/* <!-- Bag strap --> */}
      <path d="M40,10 L40,30 Q50,40 60,30 L60,10 Z" fill="#8D6E63" />
    </svg>,
      title: "Balance",
      amount: "$2.4K" ,
      profit: false, 
      percentage: "2%"
    },
    {
      id: 4,
      //SVG for shopping cart
      src: <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
      {/* <!-- Cart body --> */}
      <path d="M15,20 L10,85 L90,85 L85,20 Z" fill="#FF9900" />
    
      {/* <!-- Cart handle --> */}
      <path d="M45,20 L45,5" stroke="#333" stroke-width="5" />
    
      {/* <!-- Cart wheels --> */}
      <circle cx="30" cy="90" r="10" fill="#333" />
      <circle cx="70" cy="90" r="10" fill="#333" />
    </svg>,
      title: "Total Sales",
      amount: '$89K' , 
      profit: true,
      percentage: "11%"
    },
  ];


  return (
    <div className='w-11/12 mx-auto'>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 gap-x-auto px-12 sm:px-0 w-12/12 my-8">
      {grids.map(({ id,title, src , amount, percentage, profit}) => (
        <div key={id} className=" rounded-xl p-3 flex justify-center items-center bg-white gap-x-2">
          <div className='rounded-full'>
            {src}
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-xs text-slate-400'>{title}</p>
            <p className='font-bold text-xl'>{amount}</p>
            <div className='flex items-center text-xs'>
              <span>{profit ? <AiOutlineArrowUp className='text-[#008000]'/> : <AiOutlineArrowDown className='text-red-700'/> }</span><span className = {profit ? 'text-[#008000] font-bold' : 'text-red-700 font-bold'}>{percentage}</span>{id === 4 ? <span>&nbsp; this week</span> : <span>&nbsp; this month</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Grids
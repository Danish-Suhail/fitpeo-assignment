import React from 'react'
import Gph from './Gph';

const data = [
  {
    name: 'Jan',
  },
  {
    name: 'Feb',
  },
  {
    name: 'Mar',
  },
  {
    name: 'Apr',
  },
  {
    name: 'May',
  },
  {
    name: 'Jun',
  },
  {
    name: 'Jul',
  },
  {
    name: 'Aug',
  },
  {
    name: 'Sep',
  },
  {
    name: 'Oct',
  },
  {
    name: 'Nov',
  },
  {
    name: 'Dec',
  },
];


const BarGraph = () => {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col w-11/12 justify-between items-center mx-auto'>
      <div className='flex justify-center items-center mb-6 lg:mb-0 lg:w-auto'>
        <div className=' rounded-xl p-1 lg:p-3 flex flex-col justify-center items-center bg-white'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col mx-2 lg:mx-6'>
            <span className='text-lg font-bold '>Overview</span>
            <span className='text-xs text-slate-400 mt-2'>Monthly Earning</span>
            </div>
            <select placeholder='quarterly' className='bg-slate-100 mx-2 lg:mx-6 text-xs text-slate-400 rounded-md'>
              <option value="Quarterly" placeholder='Quarterly'>Quarterly</option>
            </select>
          </div>
          <div className='flex gap-x-[10px] lg:gap-x-6 items-end mx-4'>
          <div className='w-[12.5px] lg:w-[40px] h-[54px] lg:h-[154px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[79px] lg:h-[200px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[64px] lg:h-[176px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[74px] lg:h-[209px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[80px] lg:h-[119px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[114px] lg:h-[143px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[64px] lg:h-[196px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[94px] lg:h-[212px] bg-[#6300cc] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[74px] lg:h-[177px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[124px] lg:h-[225px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[44px] lg:h-[189px] bg-[#ebe6f1] rounded-xl'></div>
          <div className='w-[12.5px] lg:w-[40px] h-[140px] lg:h-[310px] bg-[#ebe6f1] rounded-xl'></div>
      </div>
          <div className='flex gap-x-[2px] lg:gap-x-[34px]'>
              {data.map((item)=>{
                return <span className='w-[21px] lg:w-[30px] font-bold text-[8px] lg:text-xs text-slate-600'>{item.name}</span>
              })}
          </div>
        </div>
      </div>
      <Gph />
    </div>
  )
}

export default BarGraph
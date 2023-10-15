import React from 'react'
import {RiSettingsLine} from 'react-icons/ri'
import {LuFolderSearch2} from 'react-icons/lu'
import {MdSettingsInputSvideo} from 'react-icons/md'
import {BsPersonSquare, BsPersonCircle} from 'react-icons/bs'
import {CiWallet} from 'react-icons/ci'
import {BiSolidOffer} from 'react-icons/bi'
import {MdOutlineLiveHelp} from 'react-icons/md'
import {LiaGreaterThanSolid} from 'react-icons/lia'

const Dashboard = () => {

    const data = [{
        id:1,
        title: "Product",
        symbol: <MdSettingsInputSvideo />,
    },
    {
        id:2,
        title: "Customers",
        symbol: <BsPersonSquare />,
    },
    {
        id:1,
        title: "Income",
        symbol: <CiWallet />,
    },
    {
        id:1,
        title: "Promote",
        symbol: <BiSolidOffer />,
    },
    {
        id:1,
        title: "Help",
        symbol: <MdOutlineLiveHelp />,
    },
];

  return (
    <div className=''>
    <div className='flex items-center m-6 gap-x-3 text-xl text-white'>
    <RiSettingsLine />
    <h1>Dashboard</h1>
    </div>
    <div className='mt-10 w-10/12 flex flex-col justify-center items-center mx-auto'>
        <div className='flex items-center text-sm text-white w-full bg-[#43439a] px-2 py-2 rounded-md gap-x-3'>
            <LuFolderSearch2 className='text-lg'/>
            <span>Dashboard</span>
        </div>
        {
            data.map((item)=>{
                return(
                    <div className='flex px-2 mt-3 py-2 w-full items-center justify-between'>
                        <div className='flex items-center  text-sm text-white w-full gap-x-3 rounded-md '>
                            <div className='text-lg'>{item.symbol}</div>
                            <span>{item.title}</span>
                        </div>
                        <LiaGreaterThanSolid className='text-white text-xs'/>
                    </div>
                    
            )})
        }
        <div className='flex items-center text-sm text-white w-full h-full bg-[#43439a] py-2 rounded-sm gap-x-3 mt-44'>
            <BsPersonCircle className='text-2xl ml-2'/>
            <div className='flex flex-col items-start'>
            <span className='text-sm'>Evana</span>
            <span className='text-xs'>Project Manager</span>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Dashboard
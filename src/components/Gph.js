import React from 'react'
import '../App.css'

const Gph = () => {
  return (
    // <div className='relative'>
    // <div className='pie-chart absolute ml-7 mt-4'></div>
    // <div className='pie-ch absolute'></div>
    // <div className='pie mt-10 absolute ml-12'></div>
    // </div>
      <div className="flex flex-col items-center justify-center h-[404px] bg-white rounded-xl">
        <div className='flex flex-col items-start w-10/12'>
          <h1 className="text-xl font-bold">Customers</h1>
          <p className="text-slate-400 text-xs">Customers that buy products</p>
        </div>
          <div className="relative w-50 h-50">
              <svg className="w-full h-full" viewBox="0 0 150 150">
                  {/* Gray segment (background circle) */}
                  <circle z-0 cx="75" cy="75" r="45" fill="none" stroke="#E5E7EB" strokeWidth="15" />

                  {/* Pink segment (covers approximately 20% of the circle) */}
                  <circle z-10 cx="75" cy="75" r="45" fill="none" stroke="#EC4899" strokeWidth="20" strokeDasharray="283" strokeDashoffset="370" />

                  {/* Blue segment (covers approximately 65% of the circle) */}
                  <circle z-0 cx="75" cy="75" r="45" fill="none" stroke="#3B82F6" strokeWidth="15" strokeDasharray="283" strokeDashoffset="175" />

                  {/* Inner circle to give hollow appearance */}
                  <circle z-0 cx="75" cy="75" r="30" fill="white" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">65%</span>
                  <span className="text-sm text-gray-500">Total New Customers</span>
              </div>
          </div>
      </div>
  );
}

export default Gph
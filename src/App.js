import React from 'react';
import BarGraph from './components/BarGraph';
import Home from './components/Home';
import Grids from './components/Grids';
import ProductSell from './components/ProductSell';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App bg-slate-100 flex w-full justify-center mx-auto">
      <div className=' bg-[#00004d] sticky lg:w-1/6 hidden lg:block h-[100vh] top-0 left-0'>
        <Dashboard/>
      </div>
      <div className='w-5/6'>
      <Home />
      <Grids />
      <BarGraph />
      <ProductSell />
      </div>
    </div>
  );
};


export default App;

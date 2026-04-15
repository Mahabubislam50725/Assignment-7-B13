import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center text-center py-20 '>
           <div className='space-y-5'>
             <h2 className='text-6xl font-bold '>Friends to keep close in your life</h2>
            <p className='text-lg  text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <button className='btn btn-success btn-soft text-white bg-green-800'>+ Add Friend</button>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9'>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl '>10</p>
                <p className=' text-xl  text-gray-400'>Total Friends</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl'>3</p>
                <p className=' text-xl  text-gray-400'>On Track</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl'>6</p>
                <p className=' text-xl  text-gray-400'>Need Attention</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl'>12</p>
                <p className=' text-xl text-gray-400'>Interactions This Month</p>
             </div>
           </div>
        </div>
    );
};

export default Banner;
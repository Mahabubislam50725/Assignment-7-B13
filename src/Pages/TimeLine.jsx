import React from 'react';

const TimeLine = () => {
    return (
       <div className='container mx-auto '>
         <div className='space-y-4 p-6 my-7'>
            <h1 className='font-bold text-5xl'>TimeLine</h1>
            <select defaultValue="Filter timeline" className="select">
                <option disabled={true}>Filter timeline</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
        </div>
       </div>
    );
};

export default TimeLine;
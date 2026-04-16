import React, { useContext } from 'react';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';

const TimeLine = () => {

    const { timeline } = useContext(FriendTimeLineContext);

   
    const getIcon = (type) => {
        if (type === "call") return "📞";
        if (type === "text") return "💬";
        if (type === "video") return "🎥";
        return "🤝";
    };

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

            <div className="space-y-4 p-4 mb-7">
                {
                    timeline.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm"
                        >
                            {/* ICON */}
                            <div className="text-2xl">
                                {getIcon(item.type)}
                            </div>

                            {/* TEXT */}
                            <div>
                                <p className="font-semibold text-gray-800">
                                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{" "}
                                    <span className="text-gray-500 font-normal">
                                        with {item.friend}
                                    </span>
                                </p>

                                <p className="text-sm text-gray-400">
                                    {item.time}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TimeLine;
import React, { useState } from 'react';

const ReadMoreButton = ({ text, maxChars }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded ? text : text.slice(0, maxChars);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p>{displayText}</p>
            {text.length > maxChars && (
                <div className="flex w-full justify-center">
                    <button onClick={toggleReadMore} className="mx-auto inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">{isExpanded ? 'Read Less' : 'Read More'}</button>
                </div>
            )}
        </div>
    );
};

export default ReadMoreButton;

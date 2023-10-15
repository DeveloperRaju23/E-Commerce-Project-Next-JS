import React, { useState } from 'react'

const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div> 
       
       <div className="p-4">
      <div
        onClick={toggleExpansion}
        className="flex items-center cursor-pointer"
      >
        <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
       
      </div>
      {isExpanded && (
        <div className="mt-4 w-40 bg-slate-900 text-white">
          <h3 className="text-lg font-semibold">Details</h3>
          <ul className="mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  )
}

export default NavBar
// src/components/CategoryTabs.js
import React, { useState } from 'react';

const CategoryTabs = ({ categories}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <div className="">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[8px] px-[10px] lg:px[0px]">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`md:w-[170px] w-full md:h-[145px] h-[145px] border rounded ${
            category === activeCategory ? 'bg-secondaryRed text-white ' : 'border-gray-300'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          <div className="flex flex-col items-center ">
            <img
              src={category.image}
              alt={category.name}
              className="w-10 h-10 mr-2 inline "
            />
            <span className='mt-[10px] '>{category.name}</span>
          </div>
        </button>
      ))}
    </div>
    <div className='py-[100px]'>
      <p>Content for {activeCategory.name} category one here.</p>
    
    </div>
  </div>
  );
};

export default CategoryTabs;

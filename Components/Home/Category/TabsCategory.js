import Container from '@/pages/container';
import React, { useState, useEffect } from 'react';

const TabsCategory = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('allProducts.json') 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Mobile', 'Category B', 'Category C'];

  const filteredProducts =
    activeTab === 'All'
      ? products
      : products.filter((product) => product.category === activeTab);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

const productsFilter = filteredProducts?.filter(items => items.category === "woman")
const productsFilterFashion = filteredProducts?.filter(items => items.category === "woman")



  return (
    <Container>
      <Tabs
        categories={categories}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ProductList products={productsFilter} />
      )}
    </Container>
  );
};

const Tabs = ({ categories, activeTab, onTabClick }) => (
  <div className="tabs flex justify-around">
    {categories.map((category) => (
      <div
        key={category}
        className={`tab ${activeTab === category ? 'active' : ''}`}
        onClick={() => onTabClick(category)}
      >
        {category}
      </div>
    ))}
  </div>
);



const ProductList = ({ products }) => (
  <div className="grid mt-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-[12px] rounded-[5px]">
    
  {products?.map((item) => (
    <div className='bg-grayColor rounded pb-[23px] pt-[24px]' key={item.id}>
      <img className='max-w-[200px] max-h-[150px] mx-auto' src={item.image} alt="" />
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
 
    </div>
  ))}
</div>


);

export default TabsCategory;

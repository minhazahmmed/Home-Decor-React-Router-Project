import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';

import ProductCard from '../Components/ProductCard';
import SkeletonLoader from '../Components/SkeletonLoader';

const Products = () => {
    const [products, loading] = useProducts();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchProducts = term ? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products
console.log(searchProducts)
    return (
       <div>
            <div className='flex justify-between items-center py-5'>
                <h1 className='text-2xl font-semibold'>All Products <span className='text-sm text-gray-800'>({searchProducts.length}) Products Found</span></h1>

    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input
  value = {search}
   onChange={e => setSearch(e.target.value)}
  
  type="search" required placeholder="Search" />
</label>

            </div>

            {
                loading ? (
                    <SkeletonLoader count = '16'/>
                ) :  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            searchProducts.map(product =>(
                <ProductCard key={product.id} product={product}></ProductCard>
            )
               
             )
        }
     </div>
            }

        </div>
    );
};

export default Products;
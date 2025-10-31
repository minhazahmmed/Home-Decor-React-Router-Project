import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';
import SkeletonLoader from '../Components/SkeletonLoader';

const Home = () => {
    const [products, loading] = useProducts();
    
  
    const featuredProducts = products.slice(0,6)
   
    return (
        <div>
       
            
            <div className='flex justify-between items-center py-5'>
                <h1 className='text-2xl font-semibold'>Featured Products</h1>
                <Link className='btn btn-outline' to='/products'>See All Products</Link>
            </div>
     
     {
        loading ? (
            <SkeletonLoader/>
        ) : 
   
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            featuredProducts.map(product =>(
                
                <ProductCard key={product.id} product={product}></ProductCard>
                
            )
       
               
             )
        }
     </div> }

        </div>
    
    );
};

export default Home;
import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
    const [products, loading] = useProducts()
    const product = products.find(p => String(p.id) === id)
    if(loading) return <p>Loading....</p>
    const {name, image, price, category,description} = product || {}

    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if(existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if(isDuplicate) 
                return alert("Already added in wishlist")
            updatedList = [...existingList,product]

        }
        else {
            updatedList.push(product)
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }
    
   
    return (
         <div className="card bg-base-100 border shadow-sm">
  <figure className='h-90 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Product" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{category}</p>
 
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToWishList} className="btn btn-outline">Add to wishlist</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;
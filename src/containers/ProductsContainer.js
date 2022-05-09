import React from "react";

import productsList from  '../productsList.json'
import ProductCard from '../components/ProductCardComponent'

const ProductsList = () => {
    debugger; 
    return (
        <div className="col-md-6 offset-md-3 pt-3">
            { productsList.map(product => <ProductCard product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductsList
  
        


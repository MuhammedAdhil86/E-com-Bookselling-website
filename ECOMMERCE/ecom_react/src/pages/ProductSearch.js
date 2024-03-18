// ProductSearch.js
import React, { useState, useEffect } from 'react';

const ProductSearch = ({filteredProducts}) => {


  return (
    <div className='ms-5'>
      {filteredProducts.map((product) => (
        <div key={product.id}>
            <img src={product.image} width={50} height={50}/>
          <span>{product.name}</span>
          <span>Price: ${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductSearch;
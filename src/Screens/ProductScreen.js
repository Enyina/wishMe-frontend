import React from 'react'
import './ProductScreen.css'
import Product from '../components/Product'

const ProductScreen = () => {
  return (
    <div className='productScreen'>

      <h2 className='productScreen-title'> Latest Products </h2>
      <div className='productScreen-item'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default ProductScreen
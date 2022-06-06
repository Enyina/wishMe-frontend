import React from 'react'
import Cartitem from '../components/Cartitem'

const WishlistScreen = () => {
  return (
    <div className='wishlistscreen'>
      <div className='wishlistscreen-left'>
        <h2> Wish List </h2>

        <Cartitem/>
      </div>

      <div className='wishlistscreen-right'>
        <div className='cart-info'>
          <p> Subtotal <span> (0) </span> items </p>
          <p>$499.99</p>
        </div>
        <div>
          <button> Proceed </button>
        </div>
      </div>
    </div>
  )
}

export default WishlistScreen
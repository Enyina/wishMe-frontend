import './Cartitem.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Cartitem = () => {
  return (
    <div className='cartitem'>
      <div className='cartitem-image'>
        <img src=' https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt="product name"/>
      </div>

      <Link to={`/products/${111}` } className='cartitem-name'>
        <p>Product 1</p>
      </Link>
    </div>
  )
}

export default Cartitem
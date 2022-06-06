import React from 'react'
import './Particular-productScreen.css'

const ParticularProductScreen = () => {
  return (
    <div className='Particular-productScreen'>
        <div className='Particular-productScreen-left'>
            <div className='left-image'>
                <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='product name'/>
            </div>
            <div className='left-info'>
              <p className='left-name'>Product 1</p>
              <p>Price: 499.99</p>
              <p> Description: PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India </p>
            </div>
        </div>

        <div className='Particular-productScreen-right'>
          <div className='right-info'>
            <p>
              Price: <span> $499.99</span>
            </p>
            <p>
              Status: <span>In Stock</span>
            </p>
            <p>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </p>
            <p>
              <button type='button'>Add to list</button>
            </p>
          </div>
        </div>
    </div>
  )
}

export default ParticularProductScreen
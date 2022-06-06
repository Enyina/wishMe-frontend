import React from 'react'
import { Link } from 'react-router-dom';
import './Sidedrawer.css'

const Sidedrawer = ({show, click}) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className='sidedrawer-links' onClick={click}>
        <li>
          <Link to="/wishlist" className='wishes'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Wishes <span className='sidedrawer-cartbadge'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/products'> Gift Shop </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidedrawer
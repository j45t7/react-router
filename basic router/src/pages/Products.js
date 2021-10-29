import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Apple</Link>
        </li>
        <li>
          <Link to='/products/p2'>Shoes</Link>
        </li>
        <li>
          <Link to='/products/p3'>Book</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products

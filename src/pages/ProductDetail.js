import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </div>
  )
}

export default ProductDetail

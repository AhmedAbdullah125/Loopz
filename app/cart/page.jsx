import React from 'react'
import CartBreadCramp from '../components/cart/CartBreadCramp'

export default function page() {
  return (
    <div className='cart-page'>
      <div className="container">
        <CartBreadCramp title={'Cart'} titleUrl={'/cart'} subtitle={''} subtitleUrl={''}/>
      </div>
    </div>
  )
}

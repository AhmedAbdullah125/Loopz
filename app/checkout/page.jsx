import React from 'react'
import CartBreadCramp from '../components/cart/CartBreadCramp'
import CartBody from '../components/cart/CartBody'
export default function Checkout() {
  // let { cartCont, cartHandling } = useContext(CounterContext);
  return (
    <div className='cart-page'>
      <div className="container">
        <CartBreadCramp title={'Cart'} titleUrl={'/cart'} subtitle={'Checkout'} subtitleUrl={'/checkout'}/>
        <CartBody></CartBody>
      </div>
    </div>
  )
}
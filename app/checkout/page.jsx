import React from 'react'
import CartBreadCramp from '../components/cart/CartBreadCramp'
import CheckBody from '../components/checkout/CheckBody'
export default function Checkout() {
  // let { cartCont, cartHandling } = useContext(CounterContext);
  return (
    <div className='cart-page'>
      <div className="container">
        <CartBreadCramp title={'Cart'} titleUrl={'/cart'} subtitle={'Checkout'} subtitleUrl={'/checkout'}/>
        <CheckBody></CheckBody>
      </div>
    </div>
  )
}

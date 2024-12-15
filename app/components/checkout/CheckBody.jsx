'use client'
import React, { useState, useEffect, useContext } from 'react'
import { CounterContext } from '@/app/Context/CounterContext'
import Image from 'next/image';
import Link from 'next/link';
import addressImage from '../../assets/checkout/address.svg'

export default function CartBody() {
    let { cartCont, cartHandling } = useContext(CounterContext);
    let cartContCopy = [...cartCont];
    // let [bookmarks, setBookmarks] = useState([]);
    // let secBookmark = [...bookmarks];
    let totalPrice = 0;
    for (let index = 0; index < cartCont.length; index++) {
        totalPrice += Number(cartCont[index].price) * Number(cartCont[index].Quantity);
    }
    console.log(cartCont);

    return (
        <div className="cart-body">
            <div className="prods">
                <div className="prods-heading ">
                    <h2>Shipping Address</h2>
                </div>
                <div className="cart-products checkout-address">
                    <div className="l-side">
                        <div className="img-cont">
                            <Image src={addressImage} alt='Loopz' className='address-img'></Image>
                        </div>
                        <div className="add-details">
                            <h2>My Home</h2>
                            <h3>12 ElMorour st. kuwait</h3>
                        </div>
                    </div>
                    <div className="r-side">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="prods-heading ">
                    <h2>Your Order</h2>
                </div>
                <div className="checkout-order cart-products">
                    {
                        cartCont.length === 0 ? <p className='empty'>Cart is Empty</p> :
                            cartCont.map((item, index) =>
                                <div className="checkout-product" key={index}>
                                    <div className="img-cont">
                                        <Image src={item.image} width={100} height={100} alt='product' className='product-img'></Image>
                                    </div>
                                    <div className="add-details">
                                        <h2>{item.name}</h2>
                                        <h3>{item.price} K.D</h3>
                                        <h4>Qnt : {item.Quantity}</h4>
                                    </div>

                                </div>
                            )
                    }
                </div>
            </div>

            <div className="price-summary">
                <h2>Price Summary</h2>
                <div className="price-details">
                    <div className="flex-dit">
                        <div className="head">Total Items</div>
                        <div className="value">{totalPrice} K.D</div>
                    </div>
                    <div className="flex-dit">
                        <div className="head">Total VAT</div>
                        <div className="value">1 K.D</div>
                    </div>
                </div>
                <div className="total">
                    <div className="head">Total</div>
                    <div className="value">{totalPrice + 1} K.D</div>
                </div>
                <Link href={'/checkout'} className='addBtn'>Checkout</Link>
            </div>
        </div>
    )
}

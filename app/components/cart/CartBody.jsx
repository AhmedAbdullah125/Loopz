'use client'
import React, { useState, useEffect, useContext } from 'react'
// import { CounterContext } from '@/app/Context/CounterContext';
import { CounterContext } from '@/app/Context/CounterContext'
import Image from 'next/image';

export default function CartBody() {
    let { cartCont, cartHandling } = useContext(CounterContext);
    console.log(cartCont);
    return (
        <div className="cart-body">
            <div className="prods">
                <div className="prods-heading">
                    <h2>Products ( {cartCont.length} )</h2>
                    <button><i className="fa-regular fa-trash-can"></i> clear all cart</button>
                </div>
                <div className="cart-products">
                    {
                        cartCont.map((item, index) =>
                            <div className="cart-product" key={index}>
                                <div className="l-side">
                                    <div className="img-cont">
                                        <Image src={item.image} width={100} height={100} alt='product' className='product-img'></Image>
                                    </div>
                                    <div className="info">
                                        <p className='title'>{item.name}</p>
                                        {/* <p className='category'>{item.category.name}</p> */}
                                        <div className="rate">
                                            <i className={`fa-solid fa-star ${item.rate >= 1 ? "golden" : ""}`}></i>
                                            <i className={`fa-solid fa-star ${item.rate >= 2 ? "golden" : ""}`}></i>
                                            <i className={`fa-solid fa-star ${item.rate >= 3 ? "golden" : ""}`}></i>
                                            <i className={`fa-solid fa-star ${item.rate >= 4 ? "golden" : ""}`}></i>
                                            <i className={`fa-solid fa-star ${item.rate >= 5 ? "golden" : ""}`}></i>
                                        </div>
                                        <p className='price'>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="price-summary">
                summary
            </div>
        </div>
    )
}

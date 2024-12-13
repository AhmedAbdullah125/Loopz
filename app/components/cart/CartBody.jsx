'use client'
import React, { useState, useEffect, useContext } from 'react'
// import { CounterContext } from '@/app/Context/CounterContext';
import { CounterContext } from '@/app/Context/CounterContext'

export default function page() {
    let {cartCont, cartHandling} = useContext(CounterContext);
    console.log(cartCont);
    return (
        <div className="cart-body">
            <div className="prods">
                <h2>Products ( {cartCont.length} )</h2>
                <h3><i className="fa-regular fa-trash-can"></i> clear all cart</h3>
            </div>
            <div className="price-summary">
                summary
            </div>
        </div>
    )
}

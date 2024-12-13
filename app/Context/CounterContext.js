'use client'
import React, { useState } from "react";

export let CounterContext = React.createContext(0);

export function CounterProvider({ children }) {
    let [cartCont, setCartCont] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    function cartHandling(product) {
        setCartCont(product);
    }
    return (
        <CounterContext.Provider value={{ cartCont, cartHandling }}>
            {children}
        </CounterContext.Provider>
    )
}
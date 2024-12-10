'use client'
import Link from 'next/link'
import React, { useState } from 'react'
export default function BreadCrampp(data) {
    console.log(data.data.category.type);
    let [type, setType] = useState(data.data.category.type)

    const word = type

    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    const capitalizedWord = firstLetterCap + remainingLetters
    // Freecodecamp

    return (
        <div className="home-slider">
            <div className="bead-cramp">
                <p className='breadLink'><Link href={'/'}>Home</Link> - {capitalizedWord} - Product details</p>
            </div>
        </div>
    )
}
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
export default function CartBreadCramp({title, titleUrl, subtitle, subtitleUrl}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // Freecodecamp

    return (
        <div className="home-slider">
            <div className="bead-cramp">
                <p className='breadLink'><Link href={'/'}>Home</Link> - <Link href={titleUrl}>{capitalizeFirstLetter(title)}</Link></p>
            </div>
        </div>
    )
}
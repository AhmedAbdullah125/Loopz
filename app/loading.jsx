import React from 'react'
import footerimg from './assets/loops.svg'
import Image from 'next/image'

export default function Loading() {
    return (
        <div className='loading-page'>
            <Image src={footerimg} alt='logo' className='loading-logo' />
        </div>
    )
}

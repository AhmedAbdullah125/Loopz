'use client'
import React from 'react'
import UpperNavBar from './UpperNavBar'
import logo from '../../assets/loops.svg'
import locat from '../../assets/locat.svg'
import Image from 'next/image'
import Dropdown from 'react-bootstrap/Dropdown';
import search from '../../assets/search.svg'


export default function NavBar() {
    return (
        <header>
            <UpperNavBar></UpperNavBar>
            <div className="container">
                <div className="mainNavBar">
                    <i className="fa-solid fa-bars colorMain"></i>
                    <Image src={logo} alt='loopz' className='logo'></Image>
                    <div className="locati">
                        <div className="selec text-black">
                            <Image src={locat} alt='location'></Image>
                            <span className=' font16-400'>Deliver to</span>
                            <i className="fa-solid fa-chevron-down" id='locatChevron'></i>
                        </div>
                        <div className="choosed">
                            <span className='font12-400'>Kuwait , Kuwait</span>
                        </div>
                    </div>

                    <div className="input-cont">
                        <input type="text" placeholder='Search For Products' />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <span>Toys</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="search-icon">
                            <Image src={search} alt='search'></Image>
                        </div>
                    </div>
                    <div className="nav-card">
                        <i className="fa-solid fa-bookmark"></i>
                        <p>Favourits</p>
                    </div>
                    <div className="nav-card">
                        <i className="fa-solid fa-user"></i>
                        <p>Favourits</p>
                    </div>
                    <div className="cart-balance">
                        <div className="cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>2</span>
                        </div>
                        <div className="balance">
                            <span>324,000</span>
                            <span>KD</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import cube from '../../assets/Home/cube.png'
import Rentals from '../../assets/Home/Rentals.svg'
import Tickets from '../../assets/Home/Tickets.svg'
import prod1 from '../../assets/Home/1.jpg'
import prod2 from '../../assets/Home/2.png'
import prod3 from '../../assets/Home/3.png'
import prod4 from '../../assets/Home/4.png'
import prod5 from '../../assets/Home/5.png'
import prod6 from '../../assets/Home/6.png'
import prod7 from '../../assets/Home/7.jpg'
import prod8 from '../../assets/Home/8.jpg'
import offer from '../../assets/Home/offer.svg'
import t1 from '../../assets/Home/t1.jpg'
import t2 from '../../assets/Home/t2.jpg'
import t3 from '../../assets/Home/t3.jpg'
import t4 from '../../assets/Home/t4.jpg'

import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HomeContent() {
    let [selectedTab, setSelectedTab] = useState('Toys');
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [bookmarks, setBookmarks] = useState([]); //bookMarks array
    let secBookmark = [];
    let products = [
        {
            id: "01", title: "Toys", img: cube, data:
                [{
                    id: 1, title: "New Arrivals", data: [
                        { id: 111, img: prod1, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 113, img: prod3, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 115, img: prod5, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 112, img: prod2, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },
                {
                    id: 2, title: "Offers", data: [
                        { id: 114, img: prod4, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 13 },
                        { id: 121, img: prod2, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 50 },
                        { id: 122, img: prod5, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 12 },
                        { id: 123, img: prod3, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 33 },
                        { id: 124, img: prod6, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 19 },
                    ]
                },
                {
                    id: 3, title: "Educational Toys", data: [
                        { id: 131, img: prod3, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 132, img: prod4, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 133, img: prod6, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 134, img: prod5, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },
                {
                    id: 4, title: "Aircrafts Toys", data: [
                        { id: 141, img: prod2, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 142, img: prod1, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 143, img: prod7, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 12 },
                        { id: 144, img: prod8, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },]
        },
        {
            id: "02", title: "Rentals", img: Rentals, data:
                [{
                    id: 1, title: "New Arrivals", data: [
                        { id: 211, img: prod6, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 212, img: prod2, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 214, img: prod3, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 213, img: prod5, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },
                {
                    id: 2, title: "Offers", data: [
                        { id: 214, img: prod4, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 221, img: prod2, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 50 },
                        { id: 222, img: prod5, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 12 },
                        { id: 223, img: prod3, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 33 },
                        { id: 224, img: prod6, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 19 },
                    ]
                },
                {
                    id: 3, title: "Educational Toys", data: [
                        { id: 231, img: prod3, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 232, img: prod4, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 233, img: prod6, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 234, img: prod5, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },
                {
                    id: 4, title: "Aircrafts Toys", data: [
                        { id: 241, img: prod2, productTitle: "Colorful Stacking Block Wooden", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 242, img: prod1, productTitle: "ITTL EDUCATIONAL TOY", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 243, img: prod7, productTitle: "Muslim Holy Quran Laptop", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                        { id: 244, img: prod8, productTitle: "Wooden Magnetic Drawing", category: "Educational", rate: 4, price: "18.000", offer: 0 },
                    ]
                },]
        },
        {
            id: "03", title: "Tickets", img: Tickets, data:
                [{
                    id: 1, title: "Normal Tickets", data: [
                        { id: 311, img: t1, productTitle: "Slide 2 times", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "Shooting", "Trampoline ( 1 hour )", "6 years and above"], price: "8.9", offer: 0 },
                        { id: 312, img: t2, productTitle: "Open day ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "Shooting", "Trampoline ( 1 hour )", "6 years and above"], price: "8.9", offer: 0 },
                        { id: 313, img: t3, productTitle: "Slide ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "6 years and above"], price: "8.9", offer: 0 },
                        { id: 315, img: t4, productTitle: "Combo ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "6 years and above"], price: "8.9", offer: 0 },
                        { id: 314, img: t3, productTitle: "Compo ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "6 years and above"], price: "8.9", offer: 0 },
                    ]
                },
                {
                    id: 2, title: "Combo Tickets", data: [
                        { id: 321, img: t1, productTitle: "Open day ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "6 years and above"], price: "8.9", offer: 50 },
                        { id: 322, img: t2, productTitle: "ITTL TOY", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "6 years and above"], price: "8.9", offer: 12 },
                        { id: 323, img: t3, productTitle: "Slide ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "Shooting", "Trampoline ( 1 hour )", "6 years and above"], price: "8.9", offer: 33 },
                        { id: 324, img: t4, productTitle: "Open day ticket", features: ["Football pitch", "Climbing walls", "Meltdown", "Sutu interactive screen", "Shooting", "Trampoline ( 1 hour )", "6 years and above"], price: "8.9", offer: 19 },
                    ]
                },
                ]
        }
    ]
    return (
        <div className='container HomeContentHeader'>
            <div className="tabs" >
                {products.map((product, index) =>
                    <div key={product.id} className={`tab ${selectedTab == product.title ? 'avtiveTab' : ""}`} onClick={() => {
                        setSelectedIndex(index);
                        setSelectedTab(product.title);
                    }}>
                        <Image className='' alt='loopz' src={product.img}></Image>
                        <span>{product.title}</span>
                    </div>
                )}
            </div>
            <div className="products">
                {
                    products[selectedIndex].data.map((product) =>
                        <div className="cat-cat" key={product.id}>
                            <div className="products-group-title">
                                <p className="group-title">{product.title}</p>
                                <Link href={""} className='seeLink'>See all</Link>
                            </div>
                            <div className="d-none">
                            </div>
                            <div className="cards-cont">
                                <Swiper
                                    // navigation
                                    // pagination={{ type: "bullets", clickable: true }}
                                    spaceBetween={12}
                                    slidesPerView={7.5}
                                    autoplay={false}
                                    loop={false}
                                    modules={[Autoplay, Navigation, Pagination]}
                                    breakpoints={{
                                        1400: {
                                            slidesPerView: 4,
                                        },
                                        1100: {
                                            slidesPerView: 4,
                                        },
                                        767: {
                                            slidesPerView: 3,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            autoplay: false,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                            autoplay: false,
                                        },
                                        100: {
                                            slidesPerView: 1,
                                            autoplay: false,
                                        },
                                    }}
                                >
                                    {product.data.map((singleProduct) =>
                                        <SwiperSlide key={singleProduct.id}>
                                            {selectedIndex < 2 ?
                                                <div className={`product-card`} >
                                                    {singleProduct.offer > 0 ?
                                                        <div className="offerTag" style={{ backgroundImage: `url(${offer.src}` }}>
                                                            <p>{singleProduct.offer}% Sale</p>
                                                        </div>
                                                        : null
                                                    }

                                                    <i className={`${bookmarks.includes(singleProduct.id) ? 'fa-solid colored' : "fa-regular"} fa-bookmark `} onClick={() => {
                                                        if (bookmarks.includes(singleProduct.id)) {
                                                            secBookmark = [...bookmarks];
                                                            let index = secBookmark.indexOf(singleProduct.id);
                                                            secBookmark.splice(index, 1);
                                                            setBookmarks(secBookmark);
                                                        }
                                                        else {
                                                            secBookmark = [...bookmarks];
                                                            secBookmark.push(singleProduct.id);
                                                            setBookmarks(secBookmark);
                                                        }
                                                        console.log(bookmarks);
                                                        console.log(bookmarks.includes(singleProduct.id));
                                                    }
                                                    }></i>

                                                    <div className="img-cont">
                                                        <Image src={singleProduct.img} alt='Loopz'></Image>
                                                    </div>
                                                    <h3 className="productName">{singleProduct.productTitle}</h3>
                                                    <span className='productCat'>{singleProduct.category}</span>
                                                    <div className="rate">
                                                        <i className={`fa-solid fa-star ${singleProduct.rate >= 1 ? "golden" : ""}`}></i>
                                                        <i className={`fa-solid fa-star ${singleProduct.rate >= 2 ? "golden" : ""}`}></i>
                                                        <i className={`fa-solid fa-star ${singleProduct.rate >= 3 ? "golden" : ""}`}></i>
                                                        <i className={`fa-solid fa-star ${singleProduct.rate >= 4 ? "golden" : ""}`}></i>
                                                        <i className={`fa-solid fa-star ${singleProduct.rate >= 5 ? "golden" : ""}`}></i>
                                                    </div>
                                                    <div className="price-period">
                                                        <h4 className='productPrice'>{singleProduct.price} K.D</h4>
                                                        {selectedIndex == 1 ? <h6 className='period'>1 day</h6> : null}
                                                    </div>
                                                    {selectedIndex == 0 ? <Link href={''} className='addBtn'>Add To Cart</Link> : null}
                                                </div>
                                                :
                                                <div className="product-ticket">
                                                    <div className="img-cont">
                                                        <Image src={singleProduct.img} alt='Loopz'></Image>
                                                        <div className="prod-price">
                                                            <span className='num'>{singleProduct.price}</span>
                                                            <span className='curr'>K.D</span>
                                                        </div>
                                                    </div>
                                                    <div className="data-cont">
                                                        <h3 className="productName">{singleProduct.productTitle}</h3>
                                                        <div className="feature-cont">
                                                            <ul>
                                                                {singleProduct.features.map((feature, index) =>
                                                                    <li key={index}>{feature}</li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="circul"></div>
                                                        <div className="circul circul2"></div>
                                                    <Link href={''} className='addBtn'>Book Now</Link>

                                                    </div>
                                                </div>
                                            }
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

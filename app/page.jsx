import React from 'react'
import HomeSwiper from './components/home/HomeSwiper';
import HomeContent from './components/home/HomeContent';
import Home from './components/home/Home';

export default function page() {
  return (
    <div>
      <HomeSwiper/>
      <Home></Home>
      {/* <HomeContent/> */}
    </div>
  )
}

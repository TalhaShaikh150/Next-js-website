import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Browse from '../Components/Browse'
import Products from '../Components/Products'
import Rooms from '../Components/Rooms'

import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Browse/>
    <Products/>
    <Rooms/>
    {/* <Furniture/> */}
    <Footer/>
    </div> 
  )
}

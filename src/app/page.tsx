import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Browse from '../components/Browse'
import Products from '../components/Products'
import Rooms from '../components/Rooms'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Browse/>
    <Products/>
    <Rooms/>
    </div>
  )
}

import React from 'react'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import Browse from '@/Components/Browse'
import Products from '@/Components/Products'
import Rooms from '@/Components/Rooms'

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

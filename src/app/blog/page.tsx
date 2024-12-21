import React from 'react'
import Navbar from '@/Components/Navbar'
import BlogHero from '@/Components/Blog/BlogHero'
import BlogMain from '@/Components/Blog/BlogMain'
import ShopServices from '@/Components/Shop/ShopServices'
import Footer from '@/Components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <BlogHero/>
      <BlogMain/>
      <ShopServices/>
      <Footer/>
    </div>
  )
}

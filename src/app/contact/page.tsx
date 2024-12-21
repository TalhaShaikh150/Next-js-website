import Navbar from '@/Components/Navbar'
import ContactHero from '@/Components/Contact/ContactHero'
import ContactMain from '@/Components/Contact/ContactMain'
import React from 'react'
import ShopServices from '@/Components/Shop/ShopServices'
import Footer from '@/Components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <ContactHero/>
      <ContactMain/>
      <ShopServices/>
      <Footer/>
    </div>
  )
}

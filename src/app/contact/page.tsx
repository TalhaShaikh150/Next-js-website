import Navbar from '@/Components/Navbar'
import ContactHero from '@/Components/Contact/ContactHero'
import ContactMain from '@/Components/Contact/ContactMain'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <ContactHero/>
      <ContactMain/>
    </div>
  )
}

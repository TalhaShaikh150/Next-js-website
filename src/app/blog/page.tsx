import React from 'react'
import Navbar from '@/Components/Navbar'
import BlogHero from '@/Components/Blog/BlogHero'
import BlogMain from '@/Components/Blog/BlogMain'

export default function page() {
  return (
    <div>
      <Navbar/>
      <BlogHero/>
      <BlogMain/>
    </div>
  )
}

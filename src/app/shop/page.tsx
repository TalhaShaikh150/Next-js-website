import Navbar from "@/Components/Navbar";
import React from "react";
import HeroShop from "@/Components/Shop/HeroShop";
import ShopProducts from "@/Components/Shop/ShopProducts";
import ShopProducts02 from "@/Components/Shop/ShopProducts02";
import ShopServices from "@/Components/Shop/ShopServices";
import Footer from "@/Components/Footer";

export default function Shop() {
  return (
    <div>
      <Navbar />
     <HeroShop/>
     <ShopProducts/>
     <ShopProducts02/>
     <ShopServices/>
     <Footer/>
    </div>
  );
}

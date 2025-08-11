import React, { useEffect, useState } from "react";
import { Menu, WineOff } from "lucide-react";


function Header(){

  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
    setIsScrolled(window.screenY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-green-400">Erick</span>
          <span className="text-white">TEJADA</span>
          <span className="text-green-400">.</span>
        </div>
          <nav className="hidden mb:flex space-x-8">

          </nav>
        <button className="hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg 
        hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
        Download CV Now
        </button>
        {/* mobile menu */}
        <button className="text-white md:hidden">
          <Menu size={24}/>
        </button>
      </div>
      {/* mobile nav*/}
      <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">

        <button className="mt-4 w-full flex item-center justify-center gab-2 bg-green-600
          text-while px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">
          Download my CV Now
        </button>
      </nav>
    </div>
  </header>
}

export default Header;
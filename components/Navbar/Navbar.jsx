'use client'
import React, {useState, useEffect} from "react";
import ThemeToggler from "../Themes/ThemeToggler"
import Logo from "../essentials/Logo";
import NavContent from "./NavContent";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  
useEffect(() => {
  const scrollYPos = window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  });

  return () => window.removeEventListener('scroll', scrollYPos);
});

  return (
    <header className={`${
      header
      ? 'py-4 bg-white shadow-lg dark:bg-accent'
      : 'py-6 dark:bg-transparent'
    }  top-0 z-30 transition-all ${pathname === '/' && ''} `}>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
      <Logo/>
      <div className="flex items-center gap-x-6">
      {/* Nav Section */}
      <NavContent containerStyles='hidden md:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
      <div className="hidden md:block">
      <ThemeToggler />
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden">
      <MobileNav/>
      </div>
      {/* End of Mobile Nav */}

      {/* End of Nav Section */}
      </div>
      </div>
    </div>
    </header>
  )
}

export default Navbar
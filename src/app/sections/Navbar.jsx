'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../datas/index';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // small device toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

// scroll
useEffect(() => {
  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    setIsScrolled(!isTop);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

    return (
        <div className='sticky top-0 z-50 '>
            <header className={`padding-x py-8 lg:px-0 px-5 absolute z-10 w-full ${isScrolled ? ' bg-slate-50 opacity-90 shadow-sm' : ""}`}>
        <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
          <a href="/">
            <Image  width={100} height={100} src={headerLogo} alt="logo" className="w-40 h-auto" />
          </a>
          <div className='lg:hidden'>
            <Image
            width={100} height={100}
              src={hamburger}
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`lg:hidden absolute top-16 z-10 right-0 mt-2 p-4 border border-gray-300 shadow-md ${
              menuOpen ? 'bg-white block' : 'hidden'
            }`}
          >
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='text-lg text-gray-700 font-semibold hover:text-blue-600'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden lg:block'>
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='text-lg text-gray-700 font-semibold hover:text-blue-600'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
        </div>
    );
};

export default Navbar;
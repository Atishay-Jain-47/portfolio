import React, { useContext, useEffect, useState } from 'react';
import { HiSun, HiMoon } from "react-icons/hi";
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdClose } from "react-icons/md";
import Menu from './Menu';
import {ThemeContext} from '../context/ThemeContext';

function Navbar(){

  
  const [nav, setNav] = useState(false);
  
  const {theme, themeHandler, setTheme} = useContext(ThemeContext);


  function navHandler() {
    setNav(!nav);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme); // Sync with context
      document.documentElement.classList.toggle('dark', localTheme === 'dark');
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Store updated theme
  }, [theme]);
  
  
  return (
    <div className="sticky w-full top-0 p-2 bg-[#F5F3FE] flex flex-col justify-center items-center dark:bg-[#00040f] overflow-hidden z-50">
      <div className="max-w-7xl flex justify-between items-center w-[90%] mx-auto py-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true">
        

        <a href="#" className="text-5xl font-lobster font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent py-2 dark:text-cyan-500 max-sm:text-3xl">
          Atishay
        </a>

        <div className="text-[20px] max-[768px]:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1]">
          <a href="#" className="hover:text-cyan-500">Home</a>
          <a href="#education" className="hover:text-cyan-500">Education</a>
          <a href="#projects" className="hover:text-cyan-500">Projects</a>
          <a href="#contacts" className="hover:text-cyan-500">Contacts</a>

          <div className="cursor-pointer" onClick={themeHandler} >
            {theme === 'dark' ? (
              <HiSun className="text-2xl"  />
            ) : (
              <HiMoon className="text-2xl"  />
            )}
          </div>

        </div>

        <div 
          className="md:hidden flex gap-x-4"
        >

          <div className="cursor-pointer" onClick={themeHandler} >
            {theme === 'dark' ? (
              <HiSun className="text-2xl text:[#00040f] dark:text-[#e1e1e1]"  />
            ) : (
              <HiMoon className="text-2xl text:[#00040f] dark:text-[#e1e1e1]"  />
            )}
          </div>

          {!nav ? (
            <CgMenuRightAlt className="text-3xl -translate-y-1 cursor-pointer text-[#00040f] dark:text-[#e1e1e1]" onClick={navHandler} />
          ) : (
            <MdClose className="text-3xl cursor-pointer -translate-y-1 text-[#00040f] dark:text-[#e1e1e1]" onClick={navHandler} />
          )}

        </div>
      </div> 
      

      {nav && <Menu nav={nav} />}
    </div>
  );
}

export default Navbar;


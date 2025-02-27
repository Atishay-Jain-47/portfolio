import React, { useContext, useEffect, useState } from 'react';
import { HiSun, HiMoon } from "react-icons/hi";
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdClose } from "react-icons/md";
import Menu from './Menu';
import {ThemeContext} from '../context/ThemeContext';

function Navbar(){

  const [nav, setNav] = useState(false);

  const {theme, themeHandler} = useContext(ThemeContext);

  function navHandler() {
    setNav(!nav);
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } 
    else {
      document.documentElement.classList.remove('dark');
    }
    console.log(theme);
  }, [theme]);

  return (
    <div className="sticky top-0 p-2 b w-full flex flex-col left-0 bg-[#F5F3FE] right-0 max-[930px]:mx-5 dark:bg-[#00040f] z-50">
      <div className="flex justify-between items-center w-[90%] mx-auto py-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true">
        

        <a href="#" className="text-5xl font-lobster font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent py-2 dark:text-cyan-500 max-sm:text-3xl">
          Atishay
        </a>

        <div className="text-[20px] max-[930px]:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1]">
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
          className="min-[930px]:hidden flex gap-x-4"
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


import React from 'react'

function Menu({nav}) {
  return (
    <div className={`fixed right-0 h-full w-[40%] max-[500px]:w-[50%] bg-[#f5f3fe] dark:bg-[#00040f] shadow-lg flex flex-col min-[930px]:hidden max-sm:top-[80px] top-[90px] items-center border-text-slate-300 text-[#00040f] dark:text-slate-300 mt-5 leading-10 text-lg  transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 linear z-50`}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <a href="#">Home</a>

      <a href="#education">Education</a>

      <a href="#projects">Projects</a>

      <a href="#contacts">Contacts</a>

    </div>
  )
}

export default Menu


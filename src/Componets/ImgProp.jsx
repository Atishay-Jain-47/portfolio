import React from 'react'

function ImgProp({img}) {
  return (
    <div className="w-[100px] max-md:w-[75px] max-md:h-[75px] bg-amber-300 hover:scale-110 transition-all duration-300  h-[100px] content-center shadow-xl shadow-slate-400 hover:shadow-xl dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ddd] to-[#eee] dark:from-[#051937] items-center justify-center dark:to-[#222] rounded-full place-content-center flex max-sm:translate-x-1">
        <img src={img} alt="html" className="max-md:h-[45px] h-[55px]  " />
    </div>
  )
}

export default ImgProp
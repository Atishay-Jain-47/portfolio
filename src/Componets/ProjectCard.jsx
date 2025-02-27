import React from 'react'
import {motion} from 'framer-motion'
import { RiGithubLine, RiLink } from "react-icons/ri";

function ProjectCard({project}) {
  const image = project.image;
  const title = project.title;
  const description = project.description;
  const technologies = project.technologies;

  return (
    <motion.div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="false"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden mx-5 hover:shadow-[var(--shadowHover)] rounded-[var(--border-radius)] shadow-[var(--shadow)] w-[380px] "
    >

      <div className='h-[267px] p-[1px] '>
        <img src={image}  height={267} className='w-full h-full object-fit ' />

        <div className='bg-gray-950 absolute left-0 top-0 w-full h-full duration-300 opacity-0 group-hover:opacity-95 '></div>

      </div>

      <div>
        <span className='text-white bg-[#ff2e2e] rounded-bl-[0.98rem] rounded-br-[0.98rem] absolute top-0 left-6 text-sm inline-block px-[0.625rem] py-[0.19rem] translate-y-[-40px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 '>{technologies.join(', ')}</span>

        <p className='text-white text-[1.25rem] m-0 mb-[0.98rem] px-5 absolute top-[3.75rem] translate-y-[30px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 '>{title}</p>

        <a href="#" className='text-white absolute bottom-6 left-6 text-[1.25rem] block bg-[#ffc42f] h-10 w-10 cursor-pointer rounded-full text-center leading-[42px] transition-all duration-300 opacity-0 content-center group-hover:opacity-100'>
          <RiLink className='mx-auto my-auto' />
        </a>

        <a href="#" className='text-white absolute bottom-6 left-[4.5rem] text-[1.25rem] block bg-[#ffc42f] h-10 w-10 content-center cursor-pointer rounded-full text-center leading-[42px] transition-all duration-300 opacity-0 group-hover:opacity-100'>
          <RiGithubLine className='mx-auto my-auto' />
        </a>
      </div>




    </motion.div>
  )
}

export default ProjectCard


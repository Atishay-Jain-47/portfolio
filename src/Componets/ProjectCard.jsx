import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine, RiLink } from "react-icons/ri";

function ProjectCard({ project }) {
  const [isActive, setIsActive] = useState(false);

  const image = project.image;
  const title = project.title;
  const technologies = project.technologies;
  const liveLink = project.liveLink;
  const github = project.github;
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
      className={`group relative overflow-hidden mx-5 hover:shadow-[var(--shadowHover)] rounded-[var(--border-radius)] shadow-[var(--shadow)] w-[380px] ${
        isActive ? 'active' : ''}`
      }
    >
      <div className="h-[267px] p-[1px]">
        <img src={image} height={267} className="w-full h-full object-fit" alt={title} />
        <div
          className={`bg-gray-950 absolute left-0 top-0 w-full h-full duration-300 ${
            isActive ? 'opacity-95' : 'opacity-0 group-hover:opacity-95'
          }`}
        ></div>
      </div>

      <div>
        <span
          className={`text-white bg-[#ff2e2e] rounded-bl-[0.98rem] rounded-br-[0.98rem] absolute top-0 left-6 text-sm inline-block px-[0.625rem] py-[0.19rem] transition-all duration-300 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-[-40px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
          }`}
        >
          {technologies.join(', ')}
        </span>

        <p
          className={`text-white text-[1.25rem] m-0 mb-[0.98rem] px-5 absolute top-[3.75rem] transition-all duration-300 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
          }`}
        >
          {title}
        </p>

        <a
          href={liveLink}
          target="_blank"
          className={`text-white absolute bottom-6 left-6 text-[1.25rem] block bg-[#ffc42f] h-10 w-10 content-center rounded-full text-center leading-[42px] transition-all duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <RiLink className="mx-auto my-auto" />
        </a>

        <a
          href={github}
          target="_blank"
          className={`text-white absolute bottom-6 left-[4.5rem] text-[1.25rem] block bg-[#ffc42f] h-10 w-10 content-center rounded-full text-center leading-[42px] transition-all duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <RiGithubLine className="mx-auto my-auto" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

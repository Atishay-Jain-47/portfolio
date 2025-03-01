import projects from  '../ProjectData'
import ProjectCard from './ProjectCard';
// import {RiLink}


function Projects() {
  console.log(projects);

  return (
    <div id='projects'>
        <div
        className="font-bold max-[1200px]:mt-4 flex flex-col dark:mt-0 items-center py-2 text-indigo-600 dark:text-indigo-500 text-5xl "
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="false"
        >Projects
        </div>

        <div 
          className='flex flex-row flex-wrap gap-8 justify-center w-[90%] mx-auto items-center mt-6 mb-6'>
          {
        	projects.map((project,index) => (
				<ProjectCard key={index} project={project} />
			) )
		  }
        </div>
    </div>
  )
}

export default Projects


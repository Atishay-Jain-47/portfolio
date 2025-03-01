import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import {Typewriter} from 'react-simple-typewriter'
import Resume from '../assets/Resume.pdf'

function Profile() {

    const profession = ["Web Developer", "Competitive Programmer", "Coder", "Enthusiastic Dev"];

    const downloadHandler = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Resume.pdf'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div className='w-full overflow-hidden flex justify-center items-center mx-auto mt-12'>
        <div className='flex flex-row-reverse max-[1030px]:flex-col max-[1030px]:items-center justify-between w-[85%] text-center mx-auto '>

            <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false" 
                className='justify-end'>
                <Lottie
                    animationData={computer}
                    loop={true}
                    className="max-w-[500px] max-h-[500px] rounded-xl "
                 />
            </div>

            <div className=' items-center gap-y-4 mt-5 flex flex-col'>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false" 
                    className='gap-x-4 flex '>
                    <a href="https://github.com/Atishay-Jain-47"><FaGithub className='text-2xl hover:text-orange-800 dark:hover:text-orange-500  transition-all duration-300 hover:scale-110 dark:text-[#e1e1e1] text-[#00040f] ' /></a>

                    <a href="https://www.linkedin.com/in/atishay-jain-75a522290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BV6sdoUK2RH24cs1phrW%2BNA%3D%3D"><FaLinkedin className='text-2xl hover:text-orange-800 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110 dark:text-[#e1e1e1] text-[#00040f]'/></a>

                    <a href="https://www.instagram.com/atishay_jain_47/"><FaInstagram className='text-2xl hover:text-orange-800 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110 dark:text-[#e1e1e1] text-[#00040f]'/></a>

                    <a href="https://x.com/Atishay47"><FaSquareXTwitter className='text-2xl hover:text-orange-800 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110 dark:text-[#e1e1e1] text-[#00040f]'/></a>
                    
                </div>

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false" 
                    className='text-4xl text-center dark:text-[#e1e1e1] text-[#00040f] '>
                    Hello, I am <span className='italic font-semibold bg-gradient-to-l from-indigo-600 via-red-600 to-blue-600 text-transparent bg-clip-text'>Atishay Jain</span>
                </div>

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className="text-3xl text-center dark:text-cyan-500 text-blue-600 font-medium lg:inline-block"
                >
                    &nbsp;
                    <Typewriter
                    words={profession}
                    loop={true}
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                    />
                |</div>
                
                <div 
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className='text-2xl text-center max-[550px]:text-xl flex flex-wrap dark:text-[#e1e1e1] text-[#00040f] '>Knack of building web applications using MERN stack.</div>

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false" 
                    className='text-2xl text-center max-[550px]:text-xl dark:text-[#e1e1e1] text-[#00040f] '>I enjoy designing tech websites.</div>

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="false" 
                    className='flex gap-x-4 mt-4 max-[400px]:text-[14px] mx-auto  text-lg text-[#00040f] font-semibold '>
                    <div className='px-6 py-2 cursor-pointer rounded-4xl bg-blue-500 hover:bg-cyan-600 transition-all duration-300 dark:bg-[#38BDF8]' ><a href="https://www.linkedin.com/in/atishay-jain-75a522290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BV6sdoUK2RH24cs1phrW%2BNA%3D%3D">Hire Me</a></div>

                    <div
                    onClick={downloadHandler}
                    className='px-6 cursor-pointer py-2 rounded-4xl dark:bg-orange-500 transition-all duration-300 hover:bg-orange-600  bg-[#FF7D29] ' >Get Resume</div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Profile


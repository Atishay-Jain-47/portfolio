import { useState, useEffect } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";

function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    

  return (
    <div>
        <button
            onClick={scrollToTop}
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-once="true"
            className={`${
                showButton ? "fixed bottom-3 right-4" : "hidden"
            } bg-[#ff4e18] p-1 cursor-pointer rounded-full text-white shadow-lg transition duration-900`}
        >
            <FaCircleArrowUp className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
    </div>
  )
}

export default ScrollToTop
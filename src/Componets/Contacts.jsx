import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {FaSquareXTwitter} from 'react-icons/fa6'
import { BsFillPersonFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


function Contacts() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  });

  function changeHandler(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function submitHandler(e){
    e.preventDefault();

    emailjs
      .send(
        'service_8v2mcp6',
        'template_dpy1z2o',
        formData,
        '99ftT8Wr-o883DX9R'
      )
      .then(
        () => {
          toast.success("Message Sent Successfully")
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.log('FAILED...', err.text);
          toast.error("Unable to send message");
        }
      );
  }

  return (
    <div id='contacts' className='px-4 py-5 mb-5 mx-auto text-center mt-4 sm:px-7 md:px-12 lg:px-32 xl:px-50'>
      <div
        className="font-bold flex flex-col items-center mt-10 text-indigo-600 dark:text-indigo-500 text-4xl sm:text-5xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="false"
      >Contact Me</div>

      <div className='flex flex-col justify-center items-center gap-4 md:flex-row dark:bg-gray-800 w-full mt-12 mx-auto rounded-xl shadow-lg shadow-gray-400 dark:shadow-2xl dark:shadow-[#2f2e35f7] bg-[#d1d1d1] p-5 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10'>
        <div className='flex flex-col gap-y-6 w-full mx-auto justify-center items-center md:w-1/2 rounded-3xl'>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-once="false"
            className='capitalize dark:text-[#FF5823] text-orange-600 mt-6 font-semibold text-2xl sm:text-3xl'>get in touch</div>

          <div
             data-aos="zoom-in-down"
             data-aos-duration="1000"
             data-aos-once="false"
            className='gap-x-4 flex justify-center mt-2 mx-auto sm:justify-start'
          >
            <a href="https://github.com/Atishay-Jain-47"><FaGithub className='text-2xl hover:text-orange-500 transition-all duration-300 hover:scale-110 text-[#00040f] dark:text-[#e1e1e1]' /></a>
            <a href="https://www.linkedin.com/in/atishay-jain-75a522290/"><FaLinkedin className='text-2xl hover:text-orange-500 transition-all duration-300 hover:scale-110 text-[#00040f] dark:text-[#e1e1e1]'/></a>
            <a href="https://www.instagram.com/atishay_jain_47/"><FaInstagram className='text-2xl hover:text-orange-500 transition-all duration-300 hover:scale-110 text-[#00040f] dark:text-[#e1e1e1]'/></a>
            <a href="https://x.com/Atishay47"><FaSquareXTwitter className='text-2xl hover:text-orange-500 transition-all duration-300 hover:scale-110 text-[#00040f] dark:text-[#e1e1e1]'/></a>
          </div>

          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="false"
            className='flex flex-col ml-8 gap-3 mt-2 max-[767px]:items-center  '>
            <div className='flex gap-3 items-center'>
              <BsFillPersonFill className='text-xl text-[#00040f] dark:text-[#e1e1e1]' />
              <p className='text-lg text-[#00040f] dark:text-[#e1e1e1]'>Atishay Jain</p>
            </div>

            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className='flex gap-3 text-[#00040f] dark:text-[#e1e1e1] items-center'>
              <FaPhoneAlt className='text-xl ' />
              <a href="tel:+917067569022" className='text-lg '>7067569022</a>
            </div>

            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
            className='flex gap-3 text-[#00040f] dark:text-[#e1e1e1] items-center'>
              <FaEnvelope className='text-xl' />
              <a href="mailto:atishayaj.47@gmail.com" className='text-lg '>atishayaj.47@gmail.com</a>
            </div>

            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className='flex gap-3 text-[#00040f] dark:text-[#e1e1e1] items-center'>
              <FaMapMarkerAlt className='text-xl' />
              <span className='text-lg '>Morena, M.P.</span>
            </div>

          </div>
        </div>

        <form
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
        onSubmit={submitHandler}
        className="flex flex-col max-[768px]:mt-5 my-6 bg-slate-800 dark:bg-[#ebe9e9] p-4 py-10 rounded-lg w-full md:w-1/2">
          <input 
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="false"
          name="name" 
          id="name" 
          value={formData.name} 
          onChange={changeHandler}
          type="text" 
          placeholder='Name'
          required 
          className="mb-6 w-full bg-[#525355] border-blue-300 focus:ring-blue-300 dark:bg-[white] text-white rounded-md border dark:border-gray-300 dark:focus:border-indigo-500 focus:ring-1 dark:focus:ring-indigo-200 text-base outline-none dark:text-[#00040f] p-3" />

          <input 
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="false"
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={changeHandler}
          type="text" 
          placeholder='Email'
          required 
          className="mb-6 w-full bg-[#525355] border-blue-300 focus:ring-blue-300 dark:bg-[white] text-white rounded-md border dark:border-gray-300 dark:focus:border-indigo-500 focus:ring-1 dark:focus:ring-indigo-200 text-base outline-none dark:text-[#00040f] p-3" />

          <textarea
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="false" 
          name="message" 
          id="message" 
          value={formData.message} 
          onChange={changeHandler}
          placeholder='Message'
          required 
          className="mb-10 w-full bg-[#525355] border-blue-300 focus:ring-blue-300 dark:bg-[white] text-white rounded-md border dark:border-gray-300 dark:focus:border-indigo-500 focus:ring-1 dark:focus:ring-indigo-200 text-base outline-none dark:text-[#00040f] p-3 h-32" />

          <button 
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="false"
          type='submit' className='py-2 px-12 max-w-[160px] mx-auto cursor-pointer rounded-md text-white font-bold bg-[#ff4e18] hover:bg-[#ff3f18] transition-all duration-300'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

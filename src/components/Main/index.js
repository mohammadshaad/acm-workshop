import React from 'react'
import Navbar from '../Navbar'
import Carousel from '../Main/Carousels'
import carousel1 from '../../assets/carousel1.jpeg'
import carousel2 from '../../assets/carousel2.webp'
import carousel3 from '../../assets/carousel3.jpeg'
import carousel5 from '../../assets/carousel5.png'
import Styles from '../Main/styles/Style.module.css'
import victory from '../../assets/victory.png'
import { FaGraduationCap } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from '../Main/Testimonials'

function index() {
  return (
    <>
      <Navbar home={true} achievements={false}  />


      <div className='h-auto bg-white grid md:grid-cols-2 p-20 md:p-10'>
        <div className='flex items-center md:items-start justify-center flex-col gap-4 max-w-7xl'>
          <h1 className={`${Styles.times_new_roman} md:text-lg `}>
            Welcome to
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${Styles.poppins} text-4xl text-[#4CAF50] md:text-7xl font-bold text-center md:text-left`}>
            SCOPE
            <br />
            <span className={`${Styles.times_new_roman} font-normal text-2xl md:text-7xl`}>
              A TALENT HUB
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

          <div className='flex items-center justify-center'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={victory} alt='' className='w-full' />
          </div>
        </motion.div>

      </div>

      <div className='w-screen h-full bg-gray-800 text-gray-200'>

        <div className='flex items-center justify-center flex-col relative md:top-20 p-4 md:p-0 md:mb-5'>
          <h1 className={`${Styles.times_new_roman} text-xs md:text-sm `}>
            Featured achievements
          </h1>
          <h2 className={`${Styles.times_new_roman} text-2xl text-[#4CAF50] md:text-6xl font-bold text-center`}>
            Once A VITian,  Always A VITian
          </h2>
        </div>

        <div className='p-10 lg:p-20'>
          <Carousel images={[carousel1, carousel2, carousel3, carousel5]} />
        </div>


      </div>


      <div>
        <Testimonials />
      </div>

      {/* <div className='p-10 z-50 flex items-center justify-center flex-col gap-5'>

        <div>
          <h1 className={`${Styles.times_new_roman} text-2xl md:text-5xl `}>
            Categories
          </h1>
        </div>

        <div className='w-full h-full grid md:grid-cols-2 gap-5'>

          <Link to='/students' className='hover:bg-[#4CAF50] hover:text-white transition-all duration-200 shadow-xl rounded-md'>
            <div className='p-10 '>
              <div className='flex items-center justify-center flex-col'>
                <FaGraduationCap />
                <h2>
                  Students
                </h2>
              </div>

            </div>
          </Link>
          <Link to='/faculties' className='hover:bg-[#4CAF50] hover:text-white transition-all duration-200 shadow-xl rounded-md'>
            <div className='p-10 '>
              <div className='flex items-center justify-center flex-col'>
                <FaChalkboardTeacher />
                <h2>
                  Faculties
                </h2>
              </div>

            </div>
          </Link>


        </div>


      </div> */}


    </>
  )
}

export default index
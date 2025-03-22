import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Castillo</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Find some best places to spend your holiday in your own city.</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>2</p>
                    <p>Parking Facility</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>1</p>
                    <p>Kitchen</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>2</p>
                    <p>Bedroom</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>1</p>
                    <p>Pool Area</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>Farmhouse Hub is one of the easily approachable weekend homes rentals with great atmosphere around Surat. You can indulge yourself in our villa that is well-equipped bedrooms, swimming pool, spacious living room, and garden area there are many more things you can enjoy at Farmhouse Hub.It will definitely prove as a good value for friends, groups and families who prefer comfortable urban break at relatively cost-effective budget. We always look for things that add some great value to your vacation.</p>
            {/* <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button> */}
        </div>
      </div>
    </motion.div>
  )
}

export default About

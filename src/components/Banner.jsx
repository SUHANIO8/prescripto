import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-14 lg:px-12 my-20 ms:mx-10 '>
         {/* left side content */}
        <div className='flex py-8 sm:py-10  md:py-16 lg:py-24 lg:pl-5 '>
        <div className='text-xl sm:text-2xl md:text-3xl lg-text-5xl font-semibold text-white'>
           <p> Book Appointment</p>
            <p className='mt-4'> with 100+ trusted doctors</p>
        </div>
        <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600  py-3 px-8 rounded-full mt-6 hover:scale-105 transition-all'> Create account</button>
        </div>

        {/* right side content */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="Banner Image" />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Banner

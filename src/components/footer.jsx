import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/* left section */}
          <div> 
             <img  className='mb-5 w-40' src={assets.logo} alt="" />
             <p className='w-full sm:w-2/3 text-gray-600 leading-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi, repudiandae cupiditate esse doloribus voluptatum impedit voluptates similique eveniet culpa? Harum vitae asperiores unde id esse non veritatis fugit dolor?</p>
          </div>
          {/* center section */}
          <div>
             <p className='text-xl font-medium mb-5'>Company</p>
                <ul>
                  <li>Contact</li>
                  <li>About Us</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                  </ul>
          </div>
          {/*right section */}
          <div>
             <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                 <li>+1-212-456-8790</li>
                 <li>info@company.com</li>
                </ul>
          </div>
      </div>
      {/* copyright text */}
      <div>
<hr />
<p className='py-5 text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem qui consequatur maiores ex unde pariatur et, cum eius consequuntur molestiae eligendi quod, modi tenetur veritatis excepturi cupiditate illum? Sed, laboriosam.</p>
      </div>
    </div>
  )
}

export default Footer

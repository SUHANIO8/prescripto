import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)
  
  const applyFilter = () => {
    if (speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  

  // Filter doctors by speciality if speciality param exists
  // const filteredDoctors = speciality
  //   ? doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase())
  //   : doctors

  return (
    <div>
      <p className=' text-gray-600'> Browse through the doctors specialist</p>
      {/* {filteredDoctors.length > 0 ? (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
          <h1 className='text-3xl font-medium text-center'>
            {speciality ? `Doctors specialized in ${speciality}` : 'All Doctors'}
          </h1>
          <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {filteredDoctors.map((item, index) => (
              <div
                key={item._id || index}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300'
              >
                <img className='bg-blue-50' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <span className='w-2 h-2 bg-green-200 rounded-full inline-block'></span>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-900 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-center mt-10 text-gray-600'>No doctors found for this speciality.</p>
      )} */}
      <div className='flex flex-col items-start gap-5 mt-5 sm:flex:row'>
        <div className=' flex flex-col text-gray-600  gap-4 text-sm '>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> General Practitioners</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Cardiologists</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Dermatologists</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Orthopedic Surgeons</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Neurologists</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Orthopedic Surgeons</p>
          <p className='{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 round}'> Pediatricians</p>
        </div >
        <div className='w-full grid grid-cols-auto gap-4  gap-y-6 '>
          {
            filterDoc.map((item,index)=>(
            <div key={item._id || index} onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300'>
                <img  className='bg-blue-50' src={item.image} alt=""/>
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                      <span className='w-2 h-2 bg-green-200 rounded-full inline-block'></span>
                      <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-900 text-sm'>{item.speciality} </p> 
                </div>  
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors

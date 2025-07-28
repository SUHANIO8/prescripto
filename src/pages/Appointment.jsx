import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
   setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date(today)
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() >10 ? currentDate.getHours() + 1 :10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        // formatting time
        let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})
        
        // add slot to array
        timeSlots.push({
        dateTime: new Date(currentDate),
        time: formattedTime,
        })

        // incrementing time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(pre => ([...pre, timeSlots]))
    }
  }


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(()=>{
    console.log(docSlots);
  },[docSlots])

  return docInfo && (
    <div className="bg-gray-50 p-6">
      {/* Doctors Details */}
      <div className="flex gap-4 flex-col sm:flex-row max-w-4xl mx-auto items-stretch">
        <div className="w-40 bg-blue-600 rounded-lg p-4">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={docInfo?.image}
            alt={docInfo?.name}
          />
        </div>

        <div className="flex flex-col border border-gray-400 rounded-lg p-6 bg-white mx-2 sm:mt-0 mt-4">
          {/* name degree experience */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo?.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>

          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
              {docInfo.experience}
            </button>
          </div>

          {/* Doctor About */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:
            <span className="text-gray-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointment


import React from 'react'
import l from "../images/letter-n.png"
import { useNavigate } from 'react-router-dom'
const Appbar = () => {
  const navigate = useNavigate()

  const handlesignupClick = () => {
    navigate('/signin')
  }

  const handleLoginClick = () => {
    navigate('/signup')
  }

  return (
    <div className='bg-blue-300 flex items-center justify-between px-6 py-2 drop-shadow'>
      <div className='flex items-center space-x-4'>
        <div className='text-2xl font-bold'>
          <img src={l} alt="" className='w-[32px]' />
        </div>
        
      </div>
      <div className='flex justify-center gap-5'>
        <button className='bg-white text-blue-500 px-4 py-2 rounded-lg shadow-xl hover:bg-sky-50 font-bold' onClick={handleLoginClick}>Signin</button>
        <button className='bg-white text-blue-500 px-4 py-2 rounded-lg shadow-xl hover:bg-blue-50 font-bold' onClick={handlesignupClick}>Signup</button>
      </div>
    </div>
  )
}

export default Appbar

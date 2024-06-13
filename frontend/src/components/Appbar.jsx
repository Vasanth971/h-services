
import React from 'react'
import l from "../images/letter-n.png"
const Appbar = () => {

  return (
    <div className='bg-blue-300 flex items-center justify-between px-6 py-2 drop-shadow'>
      <div className='flex items-center space-x-4'>
        <div className='text-2xl font-bold'>
          <img src={l} alt="" className='w-[32px]' />
        </div>
        
      </div>
      <h2 className='t'>login</h2>
    </div>
  )
}

export default Appbar

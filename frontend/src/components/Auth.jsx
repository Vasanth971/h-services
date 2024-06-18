import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = ({ type }) => {

    const [postInputs,setPostInputs] = useState({
        name: "",
        username: "",
        password: ""
    })
  return (
    <div className='h-screen flex flex-col justify-center '>
        <div className='flex justify-center'>
            <div className='bg-blue-100 rounded-lg px-6 py-10'>
                <div className='px-10'>
                    <div className='font-extrabold text-3xl'>
                        Create an account
                    </div>
                    <div className='flex justify-center text-slate-400'>
                        {type === 'signin' ? "Don't have an account? " : "Already have an account? "}
                        <Link className='pl-2 underline' to={type === 'signin' ? '/signup' : '/signin'}>{type === 'signin' ? 'Sign up' : "Sign in"}</Link>
                    </div>
                </div>
                <div className='pt-8'>
                    {type === 'signin' ? <LabelledInput label="Username" placeholder="Vasanth Kumar..." onChange={(e)=> {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}/> : null}
                    <LabelledInput label='Email' placeholder='vasanth@gmail.com' onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }}/>
                    <LabelledInput label="Password" placeholder="1234567890" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}/>

                    <button className=' text-md mt-8 w-full text-white  bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-5 py-2 '>{type === 'signup' ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Auth



function LabelledInput({ label,placeholder,onChange,type }) {
    return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
    <input onChange={onChange} type={type || "text"} className="bg-blue-50 border border-blue-400 text-blue-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-600 block w-full p-2.5 " placeholder={placeholder} required />
</div>
}






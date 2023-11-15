"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


 
export default function Home() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
 
  const myFunction = (data : any) => {
    console.log('Form data:', data);
  }


const isFormValid = Object.keys(errors).length=== 0;
 
  return (
    <div className="bg-blue-500">
            
    <main className="flex min-h -screen flex-col items-center justify-between p-24">
      
      <h1 className={`mb-3 text-3xl font-semibold`}>Login Page</h1>
      <div className='row mt-0'>
        <form onSubmit={handleSubmit(myFunction)} className='bg-white rounded p-4 shadow-md'>
          <div className='form-group mb-2'>
            <label htmlFor= 'Username' className="text-sm font-medium text-gray-700">Username</label>
            <input type='text' id='Username'placeholder="Username/Email" {...register("Username", {required: true})}
             className="w-full border border-gray-300 rounded p-2"/>
            {errors.Username && errors.Username.type === "required" && <p className='text-red-500 text-sm'>Please enter valid Username/Email</p>}
            
          </div>
          <div className='form-group mb-2'>
            <label htmlFor= 'password' className="text-sm font-medium text-gray-700">password</label>
            <input type='text' id='password' placeholder="Enter Password"{...register("password", {required: true})}
             className="w-full border border-gray-300 rounded p-2" />
            {errors.password && errors.password.type === "required" && <p className='text-red-500 text-sm'>Please enter valid password</p>}
           
          </div>
          <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2"
          disabled={!isFormValid || isSubmitting} >
          {isSubmitting? 'Submitting...' : 'LogIn'} </button>

    <br/>

    <div>
      <Link className="text-sm mt-3 text-right" href={"/register"}>
        Not have an account?
        <span className="bg-yellow-600 underline">Register form</span></Link>
    </div>
      
  <br/>
   <div>
      <FontAwesomeIcon className="bg-blue-400 text-white font-bold cursor-pointer px-4 py-2" icon={faTwitter} />
      <FontAwesomeIcon className="bg-blue-600 text-white font-bold cursor-pointer px-4 py-2"icon={faFacebook} />
      <FontAwesomeIcon className="bg-pink-600 text-white font-bold cursor-pointer px-4 py-2"icon={faInstagram} />
    </div>  
  
       
        </form>
      </div>
    </main>
  </div>

  )
}
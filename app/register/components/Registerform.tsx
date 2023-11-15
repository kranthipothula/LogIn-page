import React,{ useState } from "react";
import { useForm,Controller } from 'react-hook-form';
import Link from "next/link";

 
export default function Home() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
 
  const myFunction = (data:any) => {
    console.log('Form data:', data);
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (e:any) => {
      setSelectedOption(e.target.value);
    };
   

const isFormValid = Object.keys(errors).length=== 0;
 
  return (
    <main className="flex min-h -screen flex-col items-center justify-between p-24">
    
      <h1>Registerform</h1>
     <div className='row mt-5'>
        <form onSubmit={handleSubmit(myFunction)}className='bg-yellow rounded p-4 shadow-md'>
          <div className='form-group mb-4'>
            <label htmlFor= 'Name' className="text-sm font-medium text-gray-700">FirstName</label>
            <input type='text' id='Name' {...register("FirstName", {required: true, minLength: 16})}
             className="w-full border border-red-300 rounded p-0"/>
            {errors.FirstName && errors.FirstName.type === "required" && <p className='text-red-500 text-sm'>Please enter the FirstName</p>}
            {errors.FirstName && errors.FirstName.type === "minLength" && <p className='text-yellow-500 text-sm'>Please enter at least 16 characters</p>}
          </div>
          <div className='form-group mb-4'>
            <label htmlFor= 'LastName' className="text-sm font-medium text-gray-700">LastName</label>
            <input type='text' id='Name' {...register("LastName", {required: true, minLength: 16})}
             className="w-full border border-red-300 rounded p-0"/>
            {errors.LastName && errors.LastName.type === "required" && <p className='text-red-500 text-sm'>Please enter the LastName</p>}
           {errors.LastName && errors.LastName.type === "minLength" && <p className='text-yellow-500 text-sm'>Please enter at least 8 characters</p>}
          </div>
          <div className='form-group mb-4'>
            <label htmlFor= 'PhoneNumber' className="text-sm font-medium text-gray-700">PhoneNumber</label>
            <input type='text' id='PhoneNumber' {...register("PhoneNumber", {required: true, minLength: 10})}
             className="w-full border border-red-300 rounded p-0"/>
            {errors.PhoneNumber && errors.PhoneNumber.type === "required" && <p className='text-red-500 text-sm'>Please enter 10 digits phonenumber</p>}
            {errors.PhoneNumber && errors.PhoneNumber.type === "minLength" && <p className='text-yellow-500 text-sm'>Please enter at least 10 characters</p>}
          </div>
          <div className='form-group mb-4'>
            <label htmlFor= 'Email' className="text-sm font-medium text-gray-700">Email</label>
            <input type='text' id='Email' {...register("Email", {required: true, })}
             className="w-full border border-red-300 rounded p-0"/>
            {errors.Email && errors.Email.type === "required" && <p className='text-red-500 text-sm'>Please enter the email</p>}
          </div>
          <div className='form-group mb-4'>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input type='text' id='Password' {...register("Password", {required: true, minLength: 8 })}
             className="w-full border border-red-300 rounded p-0" />
            {errors.Password && errors.Password.type === "required" && <p className='text-red-500 text-sm'>Please enter password</p>}
            {errors.Password && errors.Password.type === "minLength" && <p className='text-yellow-500 text-sm'>Enter 8 characters password</p>}
          </div>
          <div><label>Industry type:</label><select value={selectedOption} onChange={handleOptionChange}>
        <option value="Select an option">Select an option</option>
        <option value="Agro">Agro</option>
        <option value="Medical">Medical</option>
        <option value="Education">Education</option>
      </select><br/>
    </div><br/>
    <h1>Select Gendar:</h1>
    <div>
      <label>
        <input type="radio" value="Male" checked={selectedOption === "Male"} onChange={handleOptionChange}/>Male</label><br/>
      <label>
        <input type="radio" value="Female" checked={selectedOption === "Female"} onChange={handleOptionChange}/>Female</label>
    </div>
    <br></br>
    <div>
      <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>PAN</label><br/>
      <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>Addarcard</label>
    </div><br/>
    <div className='form-group mb-4'>
            <label className="text-sm font-medium text-gray-700">Leave comments</label>
            <input type='text' id='Comments' {...register("Comments", {required: true, minLength: 500 })}
             className="w-full border border-red-300 rounded p-6" />
            {errors.Comments && errors.Comments.type === "required" && <p className='text-red-500 text-sm'>Please leave your comments</p>}
            {errors.Comments && errors.Comments.type === "minLength" && <p className='text-yellow-500 text-sm'>Please leave your comments</p>}
          </div>
    <br></br>
          <button className="bg-green-500 text-white font-bold rounded p-100 cursor-pointer" disabled={!isFormValid || isSubmitting} >
          {isSubmitting? 'Submitting...' : 'Submit'} </button>
        </form>
      </div>
    </main>
  )
}
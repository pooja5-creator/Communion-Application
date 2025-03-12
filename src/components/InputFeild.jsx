import React from 'react'

export default function InputField({ label, placeholder, value, onChange, name,error }) {

  return (
    <div className='h-[110px]  w-full relative'>
    <div className='w-full  min-h-[70px] sm:h-[80px] flex justify-start 
    items-start gap-1 flex-col'>
    <label className='text-[16px] sm:text-xl font-bold'>{label}</label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='w-full rounded-[2px] px-3 h-[50px] bg-white outline-0'
    />
    {error && <p className='text-red-500 text-[16px] absolute bottom-1 left-0'>{error}</p>}
  </div>
  </div>
  )
}

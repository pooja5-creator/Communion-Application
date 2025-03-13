import React from 'react'

export default function ShowLoadData() {
  return (
    <div className='w-full min-h-[300px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center'>
      {Array.from({ length: 4 }).map((el, i) => (
        <div key={i} className="w-[100%] h-[350px] bg-gray-200 rounded-xl p-3 animate-pulse">
          <div className="w-full h-[150px] bg-gray-400 rounded-lg mb-4"></div>
          <div className="w-[80%] h-[20px] bg-gray-400 rounded-md mb-2"></div>
          <div className="w-[60%] h-[16px] bg-gray-400 rounded-md mb-2"></div>
          <div className="w-[70%] h-[16px] bg-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  )
}

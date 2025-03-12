import React from 'react'

export default function LoadingEffect() {
    const num=[1,2,3]
  return (
    <div className='w-[150px]  h-[100px] flex justify-center gap-3 items-center absolute top-0 right-[30%]
    '>
        {
            num.map((_,index)=>{
                return (
                    <div className='w-7 h-7 backGroundColor2 rounded-[50%] animationClass' key={index} style={{ animationDelay: `${index * 0.5}s` }}></div>
                )
            })
        }

    </div>
  )
}

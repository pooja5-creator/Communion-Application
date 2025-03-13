import React from 'react'

export default function EmptyData() {
    return (
        <div className='w-full h-[100px]  mx-auto flex justify-center items-center'>
            <div className='w-full sm:w-[300px] rounded-2xl text-xl text-red-300 flex justify-center items-center px-3 py-2 border-[1px] border-zinc-950'>No Events Found</div>
        </div>
    )
}

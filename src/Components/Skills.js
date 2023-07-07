import React from 'react'

export default function Skills() {
  return (
    <>
    <h2 className='text-5xl font-mono font-medium text-purple-400 text-center mt-5' id='skills'>Skills</h2>
     <div className='grid sm:grid-cols-2 grid-cols-1'>
        <div className='flex flex-col justify-center items-center gap-2 my-4 sm:my-12 border-2 rounded-lg shadow-md px-4 py-4 mx-auto'>
        <i className="fa-brands fa-html5 fa-7x text-blue-400"></i>
            <h3 className='text-3xl font-serif font-medium text-sky-400'>Html</h3>
            <div className='w-48 sm:w-60 md:w-72 h-4 border-2 rounded-sm shadow-md'>
                <div className=' h-4 bg-sky-400 w-10/12'></div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 my-4 sm:my-12 border-2 rounded-lg shadow-md px-4 py-4 mx-auto'>
        <i className="fa-brands fa-css3-alt fa-7x text-blue-400"></i>
            <h3 className='text-3xl font-serif font-medium text-sky-400'>CSS</h3>
            <div className='w-48 sm:w-60 md:w-72 h-4 border-2 rounded-sm shadow-md'>
                <div className=' h-4 bg-sky-400 w-9/12'></div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 my-4 sm:my-12 border-2 rounded-lg shadow-md px-4 py-4 mx-auto'>
        <i className="fa-brands fa-square-js fa-7x text-blue-400"></i>
            <h3 className='text-3xl font-serif font-medium text-sky-400'>JavaScript</h3>
            <div className='w-48 sm:w-60 md:w-72 h-4 border-2 rounded-sm shadow-md'>
                <div className=' h-4 bg-sky-400 w-7/12 '></div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 my-4 sm:my-12 border-2 rounded-lg shadow-md px-4 py-4 mx-auto'>
        <i className="fa-brands fa-react fa-7x text-blue-400"></i>
            <h3 className='text-3xl font-serif font-medium text-sky-400'>React</h3>
            <div className='w-48 sm:w-60 md:w-72 h-4 border-2 rounded-sm shadow-md'>
                <div className=' h-4 bg-sky-400 w-5/12 '></div>
            </div>
        </div>
     </div> 
    </>
  )
}

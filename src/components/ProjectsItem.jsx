import React from 'react'

const ProjectsItem = ({img, title, href}) => {
  return (
    <a href={href} target='_blank' ><div className=' relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl shadow-gray-700 group hover:bg-gradient-to-r from-slate-200 to-slate-700 '>
        <img src={img} alt="/" className=' rounded-xl group-hover:opacity-30'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className=' text-3xl text-white tracking-wider text-center'>
                {title}
            </h3>
            
                <p className=' text-center p-1 bg-slate-800/50 rounded-xl text-slate-50 font-bold cursor-pointer text-lg'>More Info
                </p>
        </div>
    </div>
    </a>
  )
}

export default ProjectsItem
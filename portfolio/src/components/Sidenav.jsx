import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import { GoHomeFill, GoPersonFill } from 'react-icons/go'
import { FaCode, FaGithub, } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Sidenav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <CgMenuGridR onClick={handleNav} className=' absolute top-4 right-4 z-[99] md:hidden text-4xl cursor-pointer capitalize hover:scale-150 duration-200' />
            {
                nav ? (
                    <div className=' fixed w-full h-screen bg-slate-50 flex flex-col justify-center items-center z-20'>
                        <a href='#home' className=' w-96 flex justify-center text-2xl cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100 rounded-lg shadow-lg m-3 p-2'>
                            <GoHomeFill className='text-3xl' />
                            <span className=' pl-4'>Home</span>
                        </a>
                        <a href='#about' className=' w-96 flex justify-center text-2xl cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100 rounded-lg shadow-lg m-3 p-2'>
                            <GoPersonFill className='text-3xl' />
                            <span className=' pl-4'>About</span>
                        </a>
                        <a href='#experience' className=' w-96 flex justify-center text-2xl cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100 rounded-lg shadow-lg m-3 p-2'>
                            <FaCode className='text-3xl' />
                            <span className=' pl-4'>Experience</span>
                        </a>
                        <a href='#projects' className=' w-96 flex justify-center text-2xl cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100 rounded-lg shadow-lg m-3 p-2'>
                            <FaGithub className='text-3xl' />
                            <span className=' pl-4'>Projects</span>
                        </a>
                        <a href='#contact' className=' w-96 flex justify-center text-2xl cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100 rounded-lg shadow-lg m-3 p-2'>
                            <MdEmail className='text-3xl' />
                            <span className=' pl-4'>Contact</span>
                        </a>
                    </div>
                )
                    : (
                        ''
                    )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#home' className=' rounded-full cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100  shadow-lg m-2.5 p-3 ml-7'>
                        <GoHomeFill size={33} />
                    </a>
                    <a href='#about' className=' rounded-full cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100  shadow-lg m-2.5 p-3 ml-7'>
                        <GoPersonFill size={33} />
                    </a>
                    <a href='#experience' className=' rounded-full cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100  shadow-lg m-2.5 p-3 ml-7'>
                        <FaCode size={33} />
                    </a>
                    <a href='#projects' className=' rounded-full cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100  shadow-lg m-2.5 p-3 ml-7'>
                        <FaGithub size={33} />
                    </a>
                    <a href='#contact' className=' rounded-full cursor-pointer capitalize hover:scale-150 ease-in duration-200 font-bold bg-slate-100  shadow-lg m-2.5 p-3 ml-7'>
                        <MdEmail size={33} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
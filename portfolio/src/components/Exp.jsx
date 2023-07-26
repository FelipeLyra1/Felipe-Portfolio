import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { FaReact } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiNodedotjs, SiGraphql, SiTailwindcss, SiMysql } from 'react-icons/si'

function Exp() {
  return (
    <div id='experience' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-slate-50'>
        <h1 className=' text-4xl font-bold text-center text-slate-900'>
                Experience        
        </h1>
            <div className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-slate-50 grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-2 text-slate-900'>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <ImHtmlFive />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiCss3 />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiJavascript />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiNodedotjs />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <FaReact />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiGraphql />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiTailwindcss />
                </h1>
                <h1 className=' text-center m-auto p-5 text-9xl pt-11 capitalize hover:scale-150 ease-in duration-200'>
                    <SiMysql />
                </h1>
            </div>
    </div>
  )
}

export default Exp

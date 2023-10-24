import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { FaReact } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiNodedotjs, SiGraphql, SiTailwindcss, SiVite } from 'react-icons/si'

function Exp() {
    return (
        <div id='experience' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-slate-50'>
            <h1 className=' text-4xl font-bold text-center text-slate-900'>
                Experience
            </h1>
            <h2 className=' pt-11 text-2xl'>
            My toolkit includes HTML, CSS, and JavaScript for building strong foundations, while Node.js empowers me to create efficient server-side applications. React and GraphQL enable me to craft dynamic, interactive user interfaces, and I've harnessed the power of Tailwind and Vite for streamlined and responsive web development.
            </h2>
            <div className=' max-w-[1040px] m-auto md:pl-20 py-16 bg-slate-50 grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-2 text-slate-900 text-center p-5 text-9xl pt-11'>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        HTML
                    </a>
                    <ImHtmlFive />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        CSS
                    </a>
                    <SiCss3 />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        JavaScript
                    </a>
                    <SiJavascript />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        Node.js
                    </a><SiNodedotjs />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        React
                    </a><FaReact />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        GraphQL
                    </a><SiGraphql />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        Tailwind
                    </a><SiTailwindcss />
                </h1>
                <h1 className=' text-center m-auto pt-6 capitalize hover:scale-150 ease-in duration-200'>
                    <a href="#main" className=' text-sm p-[-1] font-bold'>
                        Vite
                    </a><SiVite />
                </h1>
            </div>
        </div>
    )
}

export default Exp

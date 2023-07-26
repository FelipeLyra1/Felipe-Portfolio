import React from 'react'
import ProjectsItem from './ProjectsItem'
import regexTutorial from '../assets/office1080.jpg'
import noteTaker from '../assets/post-it1080.jpg'
import techBlog from '../assets/laptop1080.jpg'
import textEditor from '../assets/code1080.jpg'

function Projects() {
    return (
        <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-slate-800'>
            <h1 className=' text-4xl font-bold text-center text-slate-800'>Projects</h1>
            <p className=' pt-11 text-2xl py-8'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates corrupti quis facere repellendus ullam minima adipisci accusamus eligendi maiores a, nemo porro minus voluptatum aliquam sit nam placeat! Sequi, in?
            </p>
            <div className=' grid sm:grid-cols-2 gap-12 mx-2 p-6 '>
                <a href="https://github.com/FelipeLyra1/Regex-Turorial">
                <ProjectsItem className='mx-2' img={regexTutorial} title='Regex Tutorial' />
                </a>
                <a href="https://github.com/FelipeLyra1/Note-Taker">
                <ProjectsItem className='mx-2' img={noteTaker} title='Note Taker' />
                </a>
                <a href="https://github.com/FelipeLyra1/Regex-Turorial">
                <ProjectsItem className='mx-2' img={techBlog} title='Tech Blog' />
                </a>
                <a href="https://github.com/FelipeLyra1/Text-Editor">
                <ProjectsItem className='mx-2' img={textEditor} title='Text Editor' />
                </a>
            </div>
        </div>
    )
}

export default Projects
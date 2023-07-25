import React from 'react'
import heroImage from '../assets/Traveling.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Main() {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover object-right scale-x-[-1]' src={heroImage} alt="" />
            <div className=' w-full h-screen absolute top-0 left-0 bg-slate-50/30'>
                <div>
                    <h1>I 'm Felipe Lyra</h1>
                    <h2>I
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                `'m a Developer`,
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                `'m a Coder`,
                                1500,
                                `'m a Tech Enthusiast`,
                                1000,
                                `'m a: const Programmer = (true);`,
                                2500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div>
                        <FaLinkedin className=' cursor-pointer' size={20}/>
                        <FaGithub className=' cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
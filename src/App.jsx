import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Exp from './components/Exp'
import Projects from './components/Projects'
import Contact from './components/Contact'





function App() {

  return (
    <div className=' bg-slate-50'>
    <Sidenav />
    <Main />
    <About />
    <Exp />
    <Projects />
    <Contact />
    </div>
  )
}

export default App

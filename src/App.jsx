import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Exp from './components/Exp'
import Projects from './components/Projects'




function App() {

  return (
    <div className=' bg-slate-50'>
    <Sidenav />
    <Main />
    <About />
    <Exp />
    <Projects />
    </div>
  )
}

export default App

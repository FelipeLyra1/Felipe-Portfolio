import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Exp from './components/Exp'




function App() {

  return (
    <div className=' bg-slate-50'>
    <Sidenav />
    <Main />
    <About />
    <Exp />
    </div>
  )
}

export default App

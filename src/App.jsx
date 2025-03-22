import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import pngegg from '../src/assets/pngegg.png'
// import reactplayer from 'react-player'
import ReactPlayer from 'react-player'
import video from '../src/assets/castillavilla.mp4'

const App = () => {
  
  return (
    <>
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <ReactPlayer url={video} playing loop muted className='react-player-vdo' />
      <Projects/>
      {/* <Testimonails/> */}
      <div>
        {/* <ReactPlayer url={video}  playing loop className='react-player'/> */}
        {/* <ReactPlayer url={video} playing loop muted /> */}
        
      </div>
      <Contact/>
      <Footer/>
    </div>
    <div  style={{zIndex:"100",left:"initial"}}>
      <a className='whatsapp_float' href="https://wa.me/919409560571?text=hi, i want to rent a Farmhouse" target='_blank'>
        <img className="fa fa-whatsapp whatsapp-icon" src={pngegg} width="60" alt="" />
      </a>
    </div>
    </>
  )
}
// href://wa.me/918238948723?text=hello how can i help you ?
export default App

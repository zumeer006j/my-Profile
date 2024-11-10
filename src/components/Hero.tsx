import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profilepicture.jpg)]  bg-cover'
    style={{backgroundSize:"35%",backgroundPosition:"left 150px top 190px"}}
    >
      
  <Navbar/>
<div className='container grid lg:grid-cols-2 h-[calc(100vh-50px)]'>
<div className='hidden lg:block'></div>
<div className='text-[80px] sm:text[100px] font-boldleading-tight flex justify-center items-center'>
  <div>
    <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">My Name is</p>
    <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Syed</p>
    <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >Zumeer</p>
    <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Imam</p>
  </div>
</div>
</div>
    </div>
  )
}

export default Hero

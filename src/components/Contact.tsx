import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Connect with Us</h2>
                <p className='text-white-600 tesxt-[18px] pt-2' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                Feel free to contact us for any questions, assistance, or feedback, and we'll respond promptly.</p>
                <div className='flex gap-3 items-center' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <FaMailBulk size={30}/> syedzumeer@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    < FaPhoneSquare size={30}/> (+92)3132046237
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id="name"/>
                </div>
                <div className='flex flex-col gap-1'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id="email"/>
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <label htmlFor="message">Message</label>
                    <textarea
                    className=' bg-transparent border border-accent'
                    id="message"rows={12}></textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Submit</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>Skills in Next.js, HTML, CSS, and TypeScript involve creating performant, dynamic web applications. With Next.js, skills include building server-rendered and static websites, implementing API routes, and optimizing SEO. HTML skills cover structuring content semantically, while CSS skills focus on styling layouts responsively with techniques like Flexbox, Grid, and animations. TypeScript skills bring type safety to JavaScript, ensuring robust, maintainable code, especially useful in larger Next.js projects for handling props, state, and API data. Combining these skills enables developers to create fast, scalable, and well-designed web application</p>
        </div>
        <div>
          <div className='"grid md:grid-cols-2 text-3xl sm:text-4xl"'>
            <div className='space-y-2'>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Nextjs</h2>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Nodejs</h2>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Html</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Typescript</h2>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Tailwind</h2>
              <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Css</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills

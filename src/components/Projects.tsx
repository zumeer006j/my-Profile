import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data =[
    {
        id:0,
        title:"Currency Converter",
        desc: "A Next.js currency converter app fetches real-time exchange rates, allowing users to convert currencies smoothly with optimized performance and error handling.",
        img:"/profilepicture2.png",
        tags: ["React","Node","Css","Typescript"],
    },
    {
        id:1,
        title:"Todo List",
        desc:"A to-do list app helps users organize tasks by adding, editing, completing, and deleting items for improved productivity and task management.",

        img:"/profilepicture3.png",
        tags: ["nextjs","Node","Css","Typescript"],
    },
    {
        id:2,
        title:"Mobile Designing",
        desc:"Mobile design creates user-friendly, responsive interfaces optimized for smaller screens, touch interactions, and quick accessibility to enhance usability on mobile devices.",
        img:"/profilepicture5.png",
        tags: ["nextjs","Node","Css","Typescript"],
    }
];

const Projects = () => {
  return (
    <div id='projects'className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

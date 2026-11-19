import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import ProjectCard from '../components/ProjectCard'

export default function Homepage()  {
  return (
    <>
      <div>
        <NavBar />
          <h1>Hello, I'm Jerry</h1>
          <p>I'm a software developer</p>    
          <ProjectCard
          title='About Me'
          description='Introduction to Jerry'
          technology='React + Vite + TypeScript'
          githubURL='https://github.com/JerryNCX'
          />
        <Projects />
      </div>
    </>
  )
}
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Tile from '../components/Tile'

export default function Homepage()  {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-100'>
      <NavBar />
      {/* Tailwind is mobile-first, grid-cols-1 gives 1 column and 4 columns from medium screen (768px) up*/}
        <main className='mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-4'>
          <Tile className='md:col-span-2 md:row-span-2'>
            <h1 className='text-4xl font-bold'>Hello, I'm Jerry</h1>
            <p className='mt-2 text-neutral-400'>I'm a software developer</p>    
          </Tile>

          <Tile id="about" className="md:col-span-2">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-2 text-neutral-400">A few lines about you.</p>
          </Tile>

          <Tile id="skills">
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-full bg-neutral-800 px-3 py-1 text-sm">React</li>
              <li className="rounded-full bg-neutral-800 px-3 py-1 text-sm">TypeScript</li>
              <li className="rounded-full bg-neutral-800 px-3 py-1 text-sm">Tailwind</li>
            </ul>
          </Tile>

          <Tile id="contact">
            <h2 className="text-xl font-semibold">Contact</h2>
            <a className="mt-2 block underline" href="mailto:ncx030715@gmail.com">Email me</a>
            <a className='mt-2 block underline' href='https://www.linkedin.com/in/ng-choong-xin-64b96a219/'>LinkedIn</a>
          </Tile>

          <Tile id="projects" className="md:col-span-3">
            <h2 className="mb-4 text-xl font-semibold">Projects</h2>
            <Projects />
          </Tile>

          <Tile id="experience">
            <h2 className="text-xl font-semibold">Experience</h2>
            <p className="mt-2 text-neutral-400">Education, internship.</p>
          </Tile>
        </main> 
    </div>
  )
}
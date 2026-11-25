import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Tile from '../components/Tile'

export default function Homepage()  {
  return (
      <div id='about' className='min-h-screen bg-neutral-950 text-neutral-100'>
        <NavBar />
        <main className='mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-4'>
          <Tile className='md:col-span-2'>
            <h1>Hello, I'm Jerry</h1>
            <p>I'm a software developer</p>    
          </Tile>
          <Projects />
        </main>
      </div> // Tailwind is mobile-first, grid-cols-1 gives 1 column and 4 columns from medium screen (768px) up
  )
}
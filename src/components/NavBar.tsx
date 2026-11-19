export default function NavBar(){
    return (
        <nav className="flex item-center justify-between p-5">
            <h2 className="text-xl font-bold">
                DevPersona
            </h2>
            
            <div className="flex gap-6">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}
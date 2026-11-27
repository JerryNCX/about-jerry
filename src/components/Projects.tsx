import ProjectCard, {type ProjectCardProps} from "./ProjectCard";

const projects: ProjectCardProps[] = [
    {title:"Final Year Project", description:"Coming Soon", technology:"TBD", githubURL:"https://github.com/JerryNCX/Final-Year-Project.git"},
    {title:"Plate Detector", description:"Coming Soon", technology:"TBD", githubURL:"https://github.com/JerryNCX/plate-detector.git"},
    {title:"Recipe-app", description:"Coming Soon", technology:"TBD", githubURL:"https://github.com/JerryNCX/recipe-app.git"}
]

export default function Projects() {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((a) => (
                <ProjectCard key={a.title} {...a} /> // spread syntax, passes every field of 'a' as prop shorthand for title={a.title}
            ))}
        </div>
    )
}
export default function ProjectCard({
    title,
    description,
    technology,
    githubURL,
}: ProjectCardProps) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <small>{technology}</small>
            <a>{githubURL}</a>
        </article>
    )
}

type ProjectCardProps = {
    title: string
    description: string
    technology: string
    githubURL: string
}
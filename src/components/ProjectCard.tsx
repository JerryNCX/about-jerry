export default function ProjectCard({
    title,
    description,
    technology,
    githubURL,
}: ProjectCardProps) {
    return (
        <article className="rounded-xl border p-5">
            <h3>{title}</h3>
            <p>{description}</p>
            <small>{technology}</small>
            <a href={githubURL} target="_blank" rel="noreferrer">GitHub</a>
        </article>
    )
}

export type ProjectCardProps = {
    title: string
    description: string
    technology: string
    githubURL: string
}
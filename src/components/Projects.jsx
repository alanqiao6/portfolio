import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow mono">03. Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <div className="project-grid">
          {projects.map((project) => {
            const Card = project.href ? 'a' : 'div'
            return (
              <Card
                key={project.name}
                className="project-card"
                {...(project.href
                  ? { href: project.href, target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <div className="project-top">
                  <h3 className="project-name">{project.name}</h3>
                  {project.href && (
                    <span className="project-arrow" aria-hidden="true">
                      &#8599;
                    </span>
                  )}
                </div>
                <p className="project-period mono">{project.period}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

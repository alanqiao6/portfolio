import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow mono">02. Experience</span>
        <h2 className="section-title">Where I've worked</h2>
        <ol className="exp-list">
          {experience.map((job) => (
            <li key={job.company} className="exp-item">
              <div className="exp-header">
                <h3 className="exp-role">
                  {job.role} · <span className="exp-company">{job.company}</span>
                </h3>
                <span className="exp-period mono">{job.period}</span>
              </div>
              <p className="exp-location mono">{job.location}</p>
              <ul className="exp-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

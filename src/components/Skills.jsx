import { skills } from '../data/content'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow mono">04. Skills</span>
        <h2 className="section-title">Tools I work with</h2>
        <div className="skills-groups">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-group">
              <h3 className="skills-category mono">{category}</h3>
              <div className="skills-tags">
                {items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

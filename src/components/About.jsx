import { profile } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow mono">01. About</span>
        <p className="about-bio">{profile.bio}</p>
        <ul className="about-facts mono">
          <li>Duke University — B.S. Computer Science, B.S. Statistics, Math Minor</li>
          <li>GPA 3.89 · Expected May 2027</li>
        </ul>
      </div>
    </section>
  )
}

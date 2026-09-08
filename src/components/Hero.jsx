import { profile } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <span className="eyebrow mono">Hi, I'm</span>
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-title">{profile.title}</h2>
        <p className="hero-tagline mono">{profile.tagline}</p>
        <p className="hero-lede">
          Building full-stack apps and ML systems — from engagement
          dashboards to rendering engines.
        </p>
        <div className="hero-links">
          <a href="#projects" className="hero-cta">
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hero-cta hero-cta-outline"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

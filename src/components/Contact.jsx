import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner">
        <span className="eyebrow mono">05. Contact</span>
        <h2 className="contact-title">Let's talk</h2>
        <p className="contact-lede">
          I'm always open to new opportunities and interesting conversations — feel
          free to reach out.
        </p>
        <a href={`mailto:${profile.email}`} className="contact-email mono">
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            LinkedIn
          </a>
        </div>
        <footer className="footer mono">
          Built by {profile.name} · {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  )
}

import { profile } from '../data/content'
import './Nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo mono">
          AQ
        </a>
        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="nav-cta"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

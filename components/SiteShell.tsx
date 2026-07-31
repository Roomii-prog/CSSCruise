import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo.png';
import { instagram } from '../app/content';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="CSS Cruise home">
        <span className="brand-mark">
          <Image src={logo} alt="CSS Cruise logo" width={54} height={54} priority />
        </span>
        <span>
          <span className="brand-name">CSS Cruise</span>
          <span className="brand-subtitle">Online mentorship</span>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a href={instagram.url} target="_blank" rel="noreferrer" className="ghost-link">
          {instagram.handle}
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Image src={logo} alt="" width={44} height={44} />
        <p>CSS Cruise | Your CSS-PMS Prep Partner</p>
      </div>
      <div className="footer-links">
        <a href={instagram.url} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={instagram.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp catalog
        </a>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

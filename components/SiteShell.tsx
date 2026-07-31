'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <Link href="/" className="brand" aria-label="CSS Cruise home" onClick={closeMenu}>
        <span className="brand-mark">
          <Image src={logo} alt="CSS Cruise logo" width={54} height={54} priority />
        </span>
        <span>
          <span className="brand-name">CSS Cruise</span>
          <span className="brand-subtitle">Online mentorship</span>
        </span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a href={instagram.url} target="_blank" rel="noreferrer" className="ghost-link" onClick={closeMenu}>
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

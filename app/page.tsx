import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '../components/SiteShell';
import { ScrollJourney } from '../components/ScrollJourney';
import logo from '../images/logo.png';
import { instagram, portfolio, services, stats, testimonials } from './content';

export default function HomePage() {
  return (
    <>
      <section className="hero reveal">
        <div className="hero-copy">
          <p className="eyebrow">CSS Cruise | Online mentorship</p>
          <h1>Your CSS-PMS prep partner for courses, mentorship, and mocks.</h1>
          <p>
            A focused education platform for aspirants who want clearer writing, stronger
            exam practice, and steady guidance from preparation to performance.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="primary-button">
              Explore services
            </Link>
            <Link href="/contact" className="secondary-button">
              Book mentorship
            </Link>
          </div>
        </div>
        <div className="profile-panel">
          <div className="profile-top">
            <span>Instagram snapshot</span>
            <a href={instagram.url} target="_blank" rel="noreferrer">
              {instagram.handle}
            </a>
          </div>
          <div className="snapshot-feature">
            <div className="snapshot-avatar">
              <Image src={logo} alt="CSS Cruise logo" width={86} height={86} />
            </div>
            <div>
              <p className="eyebrow">Education profile</p>
              <h2>CSS Cruise</h2>
              <p>Online mentorship, courses, mock practice, and writing support for CSS-PMS aspirants.</p>
            </div>
          </div>
          <a href={instagram.url} target="_blank" rel="noreferrer" className="snapshot-link">
            View Instagram profile
          </a>
          <p>
            Education profile sharing CSS-PMS prep through courses, mentorship, mocks,
            and a student community trusted by 1000+ learners.
          </p>
        </div>
      </section>

      <ScrollJourney />

      <section className="stat-grid reveal">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <PageIntro
        eyebrow="Quick summary"
        title="Built for serious preparation"
        text="Use the dedicated pages to explore CSS Cruise in detail, or jump straight into the core areas below."
      />

      <section className="summary-grid reveal">
        {services.slice(0, 3).map((service) => (
          <Link href="/services" key={service.title} className="interactive-card">
            <span>{service.title}</span>
            <p>{service.summary}</p>
          </Link>
        ))}
      </section>

      <section className="split-section reveal">
        <div>
          <p className="eyebrow">Portfolio preview</p>
          <h2>Before and after progress, shown through practical prep tracks.</h2>
          <p>
            Project showcases are framed around student outcomes: what changed, what
            improved, and how each track supports exam readiness.
          </p>
        </div>
        <div className="mini-stack">
          {portfolio.slice(0, 2).map((item) => (
            <article key={item.title}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band reveal">
        <blockquote>{testimonials[0].quote}</blockquote>
        <span>{testimonials[0].author}, {testimonials[0].role}</span>
      </section>
    </>
  );
}

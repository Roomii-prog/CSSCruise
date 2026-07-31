import { PageIntro } from '../../components/SiteShell';
import { testimonials } from '../content';

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Testimonials"
        title="Student feedback for structure, writing clarity, and mock practice."
        text="These sample testimonials can be replaced with verified student quotes when CSS Cruise"
      />

      <section className="testimonial-grid reveal">
        {testimonials.map((item) => (
          <blockquote key={item.author}>
            <p>{item.quote}</p>
            <footer>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </section>
    </>
  );
}
import { PageIntro } from '../../components/SiteShell';
import { services } from '../content';

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Courses, mentorship, mocks, and writing review for CSS-PMS aspirants."
        text="Each service is designed to give students structure, feedback, and realistic preparation instead of scattered study sessions."
      />

      <section className="service-list reveal">
        {services.map((service, index) => (
          <article key={service.title} className="interactive-card">
            <span>0{index + 1}</span>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <p>{service.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}

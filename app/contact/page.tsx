import { PageIntro } from '../../components/SiteShell';
import { ContactForm } from '../../components/ContactForm';
import { instagram } from '../content';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with a message and choose the support you need."
        text="Use Instagram or WhatsApp to ask about courses, mentorship, mock practice, and enrollment details."
      />

      <section className="contact-layout reveal">
        <ContactForm />

        <aside className="contact-panel">
          <p className="eyebrow">Direct links</p>
          <h2>Message CSS Cruise</h2>
          <a href={instagram.url} target="_blank" rel="noreferrer">
            Instagram {instagram.handle}
          </a>
          <a href={instagram.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp catalog
          </a>
          <p>
            Instagram profile detail used: CSS Cruise is listed as an education
            account for online mentorship, courses, mentorship, and mocks.
          </p>
        </aside>
      </section>
    </>
  );
}

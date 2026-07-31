import Image from 'next/image';
import { PageIntro } from '../../components/SiteShell';
import founderPhoto from '../../images/Nisha.png';

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Team"
        title="Led by Nishat Zafar, Founder of CSS Cruise."
        text="A focused mentor guiding CSS-PMS aspirants through disciplined writing practice, structured study plans, and steady exam preparation."
      />

      <section className="team-card reveal">
        <div className="founder-photo">
          <Image
            src={founderPhoto}
            alt="Nishat Zafar, Founder of CSS Cruise"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            priority
          />
        </div>
        <div>
          <p className="eyebrow">Founder</p>
          <h2>Nishat Zafar</h2>
          <p>
            Nishat Zafar founded CSS Cruise to make CSS-PMS preparation more
            structured, accessible, and accountable for serious aspirants. Her
            mentorship focuses on clear expression, disciplined writing practice,
            exam-oriented feedback, and practical study routines that help students
            move from scattered preparation to confident, measurable progress.
          </p>
        </div>
      </section>
    </>
  );
}

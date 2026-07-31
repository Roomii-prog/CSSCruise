import { PageIntro } from '../../components/SiteShell';
import { reasons, stats } from '../content';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About CSS Cruise"
        title="An online education platform for focused CSS-PMS preparation."
        text="CSS Cruise positions itself as a prep partner for aspirants who need courses, mentorship, mocks, and writing feedback in one disciplined learning flow."
      />

      <section className="split-section reveal">
        <div>
          <p className="eyebrow">What the profile says</p>
          <h2>Your CSS-PMS Prep Partner.</h2>
          <p>
            Based on the shared Instagram profile, CSS Cruise works in education and
            centers its public offering around online mentorship, courses, and mock
            preparation for competitive exam candidates.
          </p>
        </div>
        <div className="reason-list">
          {reasons.map((reason) => (
            <p key={reason}>{reason}</p>
          ))}
        </div>
      </section>

      <section className="stat-grid reveal">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>
    </>
  );
}

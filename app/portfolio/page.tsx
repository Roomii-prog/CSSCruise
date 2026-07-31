import { PageIntro } from '../../components/SiteShell';
import { portfolio } from '../content';

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Interactive project cards with before and after preparation outcomes."
        text="These showcases use practical student journeys as placeholders until real CSS Cruise case studies are ready to publish."
      />

      <section className="portfolio-grid reveal">
        {portfolio.map((item) => (
          <article key={item.title} className="project-card">
            <div>
              <span>{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.outcome}</p>
            </div>
            <div className="before-after">
              <div>
                <span>Before</span>
                <p>{item.before}</p>
              </div>
              <div>
                <span>After</span>
                <p>{item.after}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

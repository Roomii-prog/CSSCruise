'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const steps = [
  {
    kicker: '01 / Plan',
    title: 'Start with a focused prep map.',
    text: 'Students move from scattered reading into a simple weekly route for lectures, tests, and revision.',
    metric: '45 days',
  },
  {
    kicker: '02 / Write',
    title: 'Practice answers with pressure.',
    text: 'Essay, precis, grammar, and mock attempts sit inside one rhythm so writing improves with repetition.',
    metric: '3+3 weekly',
  },
  {
    kicker: '03 / Review',
    title: 'Turn feedback into the next attempt.',
    text: 'Mentorship closes the loop with comments, corrections, and priorities for the following week.',
    metric: '1000+ learners',
  },
];

export function ScrollJourney() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const updateActivePanel = () => {
      const center = window.innerHeight * 0.52;
      const nextActive = panelRefs.current.reduce((closest, panel, index) => {
        if (!panel) {
          return closest;
        }

        const box = panel.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height * 0.5 - center);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });

      setActive(nextActive.index);
    };

    updateActivePanel();
    window.addEventListener('scroll', updateActivePanel, { passive: true });
    window.addEventListener('resize', updateActivePanel);

    return () => {
      window.removeEventListener('scroll', updateActivePanel);
      window.removeEventListener('resize', updateActivePanel);
    };
  }, []);

  return (
    <section className="scroll-story reveal" aria-label="CSS Cruise preparation flow">
      <div className="scroll-story-stage">
        <p className="eyebrow">Guided scroll</p>
        <h2>Preparation that moves with every section.</h2>
        <div className="journey-device" aria-hidden="true">
          <div className="journey-device-top">
            <span />
            <span />
            <span />
          </div>
          <div className="journey-screen">
            <span className="journey-screen-label">{steps[active].kicker}</span>
            <strong>{steps[active].metric}</strong>
            <p>{steps[active].title}</p>
            <div className="journey-bars">
              {steps.map((step, index) => (
                <span
                  key={step.kicker}
                  className={index <= active ? 'is-filled' : ''}
                  style={{ '--bar-size': `${36 + index * 18}%` } as CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="journey-progress">
          {steps.map((step, index) => (
            <button
              type="button"
              key={step.kicker}
              aria-label={`Jump to ${step.title}`}
              className={index === active ? 'is-active' : ''}
              onClick={() => panelRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="scroll-panels">
        {steps.map((step, index) => (
          <article
            key={step.kicker}
            ref={(node) => {
              panelRefs.current[index] = node;
            }}
            className={`scroll-panel ${index === active ? 'is-active' : ''}`}
          >
            <span>{step.kicker}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <strong>{step.metric}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

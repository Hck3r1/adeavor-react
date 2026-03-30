import { Link } from 'react-router-dom'
import {
  HOME_HUB_LINKS,
  HOME_KEY_FACTS,
  HOME_PILLARS,
  HOME_PLATFORMS_TEASER,
} from '../constants'
import { Hero } from '../components/Hero'
import { Reveal } from '../components/Reveal'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <Hero />

      <div className={styles.pillarsBar}>
        {HOME_PILLARS.map((p) => (
          <div key={p.title} className={styles.pillarItem}>
            <div className={styles.pillarIcon} aria-hidden>
              <i className={p.icon} />
            </div>
            <div>
              <div className={styles.pillarTitle}>{p.title}</div>
              <p className={styles.pillarDesc}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <section className={styles.factsSection} aria-labelledby="facts-heading">
        <div className={styles.inner}>
          <Reveal>
            <h2 id="facts-heading" className={styles.sectionTitle}>
              At a glance
            </h2>
            <ul className={styles.facts}>
              {HOME_KEY_FACTS.map((item) => (
                <li key={item.label} className={styles.fact}>
                  <span className={styles.factValue}>{item.value}</span>
                  <span className={styles.factLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        className={styles.hubSection}
        aria-labelledby="hub-heading"
      >
        <div className={styles.inner}>
          <Reveal>
            <h2 id="hub-heading" className={styles.sectionTitle}>
              Explore Adeavor
            </h2>
            <p className={styles.hubLead}>
              Jump straight to the section you need—each area opens in one tap.
            </p>
          </Reveal>
          <ul className={styles.hubGrid}>
            {HOME_HUB_LINKS.map((item, i) => (
              <Reveal key={item.to} delayMs={60 * (i + 1)}>
                <li>
                  <Link to={item.to} className={styles.hubCard}>
                    <span className={styles.hubCardIcon} aria-hidden>
                      <i className={item.icon} />
                    </span>
                    <span className={styles.hubCardTitle}>{item.title}</span>
                    <span className={styles.hubCardBlurb}>{item.blurb}</span>
                    <span className={styles.hubCardArrow} aria-hidden>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.platformsBand}>
        <div className={styles.inner}>
          <Reveal>
            <h2
              className={`${styles.sectionTitle} ${styles.sectionTitleOnDark}`}
            >
              What we deliver
            </h2>
            <p className={styles.platformsIntro}>
              Five integrated platforms—tap any to read more on Business
              Platforms.
            </p>
            <div className={styles.platformPills}>
              {HOME_PLATFORMS_TEASER.map((p) => (
                <Link key={p.label} to={p.to} className={styles.platformPill}>
                  {p.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.introGrid}>
            <Reveal>
              <div>
                <h2 className={styles.h2}>People, process, performance</h2>
                <p>
                  Since 2011, Adeavor and its people have pursued new value that
                  improves quality of life and the environment—operating
                  ethically, safely, and with integrity.
                </p>
                <p>
                  We guarantee operational excellence through our framework of{' '}
                  <strong>People</strong>, <strong>Process</strong>, and{' '}
                  <strong>Performance</strong>, structuring how we deliver for
                  clients worldwide.
                </p>
                <Link to="/about" className={styles.link}>
                  Read our story{' '}
                  <i className="fa-solid fa-arrow-right" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <div className={styles.cards}>
              <Reveal delayMs={80}>
                <article className={styles.card}>
                  <h3>Global reach</h3>
                  <p>
                    Offices in Nigeria and the United States, supporting diverse
                    clients with market knowledge and skilled teams.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={160}>
                <article className={styles.card}>
                  <h3>Dependable solutions</h3>
                  <p>
                    Tailored services with full regulatory compliance—from
                    digital transformation to EPCCM and operations.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={240}>
                <article className={styles.card}>
                  <h3>Partnerships</h3>
                  <p>
                    Long-term relationships with clients, partners, and suppliers
                    built on integrity and transparency.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to talk?</h2>
              <p className={styles.ctaText}>
                Request a call back or reach our consultants directly.
              </p>
            </div>
            <Link to="/contact" className={styles.ctaBtn}>
              Contact us
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  )
}

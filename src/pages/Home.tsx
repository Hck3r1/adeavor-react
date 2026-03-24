import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Reveal } from '../components/Reveal'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <Hero />
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
                  Read our story →
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

import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import styles from './Business.module.css'

const PLATFORMS = [
  {
    id: 'digital',
    title: 'Adeavor Digital Solutions',
    body: [
      'As budgets tighten, cost savings are a focus for many organizations. Our process-led approach helps unlock and accelerate digital transformation—whether you start small or need an enterprise-grade solution immediately.',
      'We partner with leading digital technology providers, combining their platforms with our sales and operations expertise so clients can implement capabilities that respond to the real world in real time.',
      'We invest in technology to drive performance across every service we deliver. Our experts help you achieve your digitalization goals.',
    ],
    bullets: [
      'Strategy aligned to budget and scale',
      'Integration with proven technology partners',
      'Continuous improvement in service delivery',
    ],
  },
  {
    id: 'epccm',
    title: 'Adeavor EPCCM',
    body: [
      'Our engineering team provides industry-leading engineering management across upstream, midstream, petrochemical, and downstream markets. We develop and implement tools that improve processes and operations, with end-to-end support for complex projects without losing focus on operational excellence.',
      'We deliver turnkey and standalone construction including civil, structural, equipment erection and piping, electrical, and instrumentation—with qualified engineers for project and site management.',
      'We support the full lifecycle from concept through disposal, driving efficiencies while optimizing safety, performance, and delivery—as an independent advisor and trusted delivery partner.',
    ],
    bullets: [
      'End-to-end engineering management',
      'Turnkey and standalone construction',
      'Lifecycle support from concept to disposal',
    ],
  },
  {
    id: 'om',
    title: 'Adeavor O&M',
    body: [
      'We help improve equipment and plant reliability and minimize downtime around scheduled shutdowns. Our O&M solutions can serve as a single-source provider for your operation and maintenance needs.',
      'Our objective is to maximize facility profitability while ensuring reliability and safety.',
    ],
    bullets: [
      'Reliability and uptime focus',
      'Single-source O&M capabilities',
      'Safety and profitability balanced',
    ],
  },
  {
    id: 'academy',
    title: 'Adeavor Academy',
    body: [
      'We develop your people—from talent development and organizational performance to engineering and operational needs. We equip employees with the knowledge, abilities, and experience to perform at their best.',
    ],
    bullets: [
      'Talent and organizational development',
      'Technical and operational training',
      'Productivity-focused programs',
    ],
  },
  {
    id: 'investment',
    title: 'Adeavor Investment',
    body: [
      'Our offering spans alternative investments, specializing in fund formation for digital and traditional assets. We help clients find investments that balance value today with capabilities for tomorrow.',
      'We work in partnership to provide independent, objective advice across the investment cycle.',
    ],
    bullets: [
      'Fund formation expertise',
      'Digital and traditional assets',
      'Independent advisory',
    ],
  },
] as const

export function Business() {
  const [open, setOpen] = useState<string>(PLATFORMS[0].id)

  return (
    <>
      <PageHeader
        title="Our Business Platforms"
        subtitle="Integrated capabilities across digital, engineering, operations, talent, and investment."
      />
      <div className={styles.page}>
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Business platforms">
            <p className={styles.tocTitle}>Platforms</p>
            <ul>
              {PLATFORMS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={styles.tocBtn}
                    data-active={open === p.id}
                    onClick={() => setOpen(p.id)}
                  >
                    {p.title.replace('Adeavor ', '')}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.detail}>
            {PLATFORMS.map((p) =>
              p.id === open ? (
                <article key={p.id} className={styles.panel}>
                  <h2>{p.title}</h2>
                  {p.body.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                  <ul className={styles.bullets}>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ) : null,
            )}
          </div>
        </div>

        <div className={styles.mobileAcc}>
          {PLATFORMS.map((p) => (
            <details key={p.id} className={styles.details}>
              <summary>{p.title}</summary>
              <div>
                {p.body.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
                <ul className={styles.bullets}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  )
}

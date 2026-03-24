import { PageHeader } from '../components/PageHeader'
import styles from './ContentPage.module.css'

const SECTIONS = [
  {
    title: 'Health, safety and environment',
    paragraphs: [
      'At Adeavor, health, safety, and environmental responsibilities are integral to how we conduct business. Through observance and encouragement of this policy, we protect the environment and the well-being of our stakeholders—clients, employees, suppliers, partners, and communities where we do business.',
      'We foster an environment where employees apply passion, creativity, and skills while continuing to learn and grow. We provide a workplace that is health and safety compliant and environmentally friendly, respecting work-life balance and individual values.',
    ],
  },
  {
    title: 'Quality assurance',
    paragraphs: [
      'Quality management is integral to Adeavor. The quality manual and related procedures are working documents familiar at all levels and constantly reviewed for effectiveness. The system ensures customer requirements are met while retaining the ability to act quickly without bureaucracy, with checks and balances to eliminate errors.',
    ],
  },
  {
    title: 'Social responsibility / sustainability',
    paragraphs: [
      'Our corporate sustainability framework covers economic, social, and environmental pillars.',
      'We invest in development programs with meaningful, sustainable local impact, focusing on significant challenges in the communities where we operate.',
      'We balance local concerns with economic development—creating direct and indirect benefits through a competitive local workforce and supply chain.',
    ],
  },
] as const

export function Stewardship() {
  return (
    <>
      <PageHeader
        title="Stewardship"
        subtitle="How we protect people, quality, and the communities we serve."
      />
      <article className={styles.article}>
        {SECTIONS.map((s) => (
          <section key={s.title} className={styles.subsection}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </section>
        ))}
      </article>
    </>
  )
}

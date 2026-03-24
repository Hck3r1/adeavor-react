import { PageHeader } from '../components/PageHeader'
import { CONTACT } from '../constants' 
import styles from './ContentPage.module.css'

export function Careers() {
  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Build your career with a team dedicated to operational excellence."
      />
      <article className={styles.article}>
        <p>Adeavor is always seeking new talent to join our dedicated team.</p>
        <p>
          If you want to enhance your career with Adeavor, we would love to hear
          from you.
        </p>
        <p>
          Please e-mail your résumé in confidence to{' '}
          <a href={`mailto:${CONTACT.talentEmail}`}>{CONTACT.talentEmail}</a>.
        </p>
        <p>We look forward to meeting with you.</p>

        <section className={styles.subsection}>
          <h2>Partnerships</h2>
          <p>We value strategic collaborations.</p>
          <p>
            Join our growing network of partners and take your business further
            with us. Adeavor values partnerships built on integrity,
            professionalism, mutual respect, and understanding—and we continue
            to seek new alliances on those terms.
          </p>
        </section>
      </article>
    </>
  )
}

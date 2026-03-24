import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT } from '../constants'
import { PageHeader } from '../components/PageHeader'
import styles from './Contact.module.css'

const STEPS = [
  { title: 'A phone call from one of', detail: 'Our consultants' },
  { title: 'Evaluation of', detail: 'Your project cost' },
  { title: 'An in-person meeting to', detail: 'Discuss the details' },
  { title: 'Details are protected,', detail: 'Privacy guaranteed' },
] as const

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Reach our team in Lagos or connect by email."
      />

      <div className={styles.grid}>
        <div className={styles.inner}>
          <div className={styles.card}>
            <h2 className={styles.h2}>Send a message</h2>
            <p className={styles.hint}>
              This form is a UI placeholder—wire it to your API or form service
              when you are ready.
            </p>
            {sent ? (
              <p className={styles.success} role="status">
                Thanks—your message has been recorded for this demo. Use{' '}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> for real
                inquiries.
              </p>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                  <span>Name</span>
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label className={styles.field}>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </label>
                <label className={styles.field}>
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label className={styles.field}>
                  <span>Message</span>
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" className={styles.submit}>
                  Submit
                </button>
              </form>
            )}
          </div>

          <aside className={styles.aside}>
            <h2 className={styles.h2}>Our contact info</h2>
            <ul className={styles.infoList}>
              <li>
                <strong>Address</strong>
                <br />
                {CONTACT.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </li>
              <li>
                <strong>Phone</strong>
                <br />
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>

            <div className={styles.steps}>
              <p className={styles.stepsTitle}>What to expect</p>
              <ul>
                {STEPS.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}</strong> {s.detail}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

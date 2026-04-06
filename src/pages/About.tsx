import { ASSETS, CLIENT_LOGOS } from '../constants'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import styles from './ContentPage.module.css'

export function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Engineering and technology solutions with a commitment to operational excellence."
      />
      <Reveal>
        <article className={styles.article}>
        <div className={styles.split}>
          <img
            src={ASSETS.aboutPhoto}
            alt="Adeavor workplace collaboration"
            className={styles.photo}
            width={870}
            height={580}
          />
          <div>
            <p className={styles.lead}>
              From our inception in 2011, our company and its employees have
              maintained a commitment to pursue new value offerings that improve
              quality of life and the environment, and to conduct our businesses
              ethically and safely with integrity—complying with all applicable
              standards and laws.
            </p>
            <p>
              With our offices in Nigeria and the USA, we remain committed to
              servicing our diverse clients in the markets where we operate. Our
              unique combination of market knowledge, international presence, and
              highly skilled personnel has created a history of excellent client
              satisfaction.
            </p>
          </div>
        </div>

        <p>
          We guarantee operational excellence through our proven framework of{' '}
          <strong>People</strong>, <strong>Process</strong>, and{' '}
          <strong>Performance</strong>, which supports the key elements of our
          service delivery. We have developed and maintained global partnerships
          through our ability to deliver operational excellence in every
          solution. Our offerings are dependable, tailored services with full
          regulatory compliance—and we look forward to earning your trust.
        </p>

        <div className={styles.pillars}>
          <div>
            <h2>Vision</h2>
            <p>
              To be the dominant provider of products, services, and technology
              solutions that we offer in the market sectors where we operate.
            </p>
          </div>
          <div>
            <h2>Mission</h2>
            <p>
              To listen to and help our clients tackle their toughest challenges
              safely and profitably. Adeavor is committed to increasing long-term
              stakeholder value while adhering to high ethical standards.
            </p>
          </div>
          <div>
            <h2>Our values</h2>
            <p>
              Our first responsibility is to keep our clients’ operations, our
              employees, the communities where we operate, and our environment
              safe. We drive integrity, professionalism, understanding, quality,
              diversity, and mutual respect—making Adeavor more responsive,
              resourceful, and trusted through collaboration and transparency.
            </p>
          </div>
        </div>

        <section className={styles.subsection}>
          <h2>Leadership</h2>
          <p>
            Adeavor is entrepreneurially led by Ayo Adediji, a petroleum engineer
            by training, guiding the company to meaningful growth and
            profitability since inception. Our leaders bring solid experience and
            a firm commitment to clients, partners, and suppliers. We invest in
            building and maintaining the best team of professionals in the
            industries we serve.
          </p>
          <p>
            Day-to-day activities are coordinated by the Managing Director, with
            sectional managers overseeing administrative, marketing, and field
            personnel. We take a collaborative approach and benefit from a wide
            variety of experiences and perspectives.
          </p>
        </section>

        <section className={styles.subsection}>
          <h2>How we work with you</h2>
          <p>
            Our team strives to satisfy the demands of diverse clients, including
            special requirements for their fields. We listen and respond with
            respect, providing quality, loyalty, and a strong client experience.
          </p>
          <p>
            We provide excellent, long-term relationships with clients, partners,
            and suppliers—continually improving through innovative ideas and a
            focus on long-term success for every stakeholder.
          </p>
        </section>

        <section className={styles.clientsSection} aria-labelledby="clients-heading">
          <h2 id="clients-heading" className={styles.clientsHeading}>
            Organizations we work with
          </h2>
          <p className={styles.clientsIntro}>
            A selection of clients and partners we are proud to support across energy and industry.
          </p>
          <ul className={styles.clientsGrid}>
            {CLIENT_LOGOS.map(({ src, alt }) => (
              <li key={src} className={styles.clientCell}>
                <div className={styles.clientLogoFrame}>
                  <img src={src} alt={alt} loading="lazy" />
                </div>
              </li>
            ))}
          </ul>
        </section>
        </article>
      </Reveal>
    </>
  )
}

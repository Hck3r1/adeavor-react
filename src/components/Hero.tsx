import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES } from '../constants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Hero.module.css'

const INTERVAL_MS = 7000

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused])

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const slide = HERO_SLIDES[index]

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.media}>
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            className={styles.bg}
            data-active={i === index}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className={styles.scrim} aria-hidden />
      </div>

      <div className={styles.content}>
        <div
          key={index}
          className={`${styles.copy} ${!reducedMotion ? styles.copyAnimate : ''}`}
        >
          <p className={styles.kicker}>{slide.kicker}</p>
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.actions}>
            <Link to="/about" className={styles.btnPrimary}>
              About Adeavor
            </Link>
            <Link to="/contact" className={styles.btnGhost}>
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {!reducedMotion && (
        <div className={styles.progress} aria-hidden>
          <div
            className={styles.progressBar}
            key={index}
            style={{ animationDuration: `${INTERVAL_MS}ms` }}
            data-paused={paused}
          />
        </div>
      )}

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          ›
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Hero slides">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${s.title}`}
            className={styles.dot}
            data-active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Reveal.module.css'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: Props) {
  const reduced = usePrefersReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>()

  const visible = reduced || inView

  const style: CSSProperties | undefined = reduced
    ? undefined
    : { ['--reveal-delay' as string]: `${delayMs}ms` }

  return (
    <div
      ref={ref}
      className={`${styles.wrap} ${visible ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

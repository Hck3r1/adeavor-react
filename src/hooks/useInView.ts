import { useEffect, useRef, useState } from 'react'

type Options = {
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { rootMargin = '0px 0px -8% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold: 0.08 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, once])

  return { ref, inView }
}

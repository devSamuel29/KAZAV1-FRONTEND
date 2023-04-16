import { useCallback, useEffect, useRef } from 'react'

export function useThrottle(delay: number) {
  const timeoutRef = useRef<number | null>(null)

  const throttle = useCallback(
    (callback: () => void) => {
      if (timeoutRef.current === null) {
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null
          callback()
        }, delay)
      }
    },
    [delay]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  return throttle
}

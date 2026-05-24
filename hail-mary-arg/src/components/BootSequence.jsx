import { useEffect, useState } from 'react'

const bootLines = [
  'INITIALIZING HAIL MARY SYSTEMS...',
  'CHECKING LIFE SUPPORT...',
  'NEURAL LINK ONLINE...',
  'ASTROPHAGE REACTOR STABLE...',
  'LOADING COGNITIVE ASSESSMENT...',
]

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, bootLines[index]])
      index++

      if (index >= bootLines.length) {
        clearInterval(interval)

        setTimeout(() => {
          onComplete()
        }, 1500)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="boot-screen">
      {visibleLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  )
}
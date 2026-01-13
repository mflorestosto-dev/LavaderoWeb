"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 1000000, suffix: "+", label: "Items Cleaned" },
  { value: 24, suffix: "hrs", label: "Average Turnaround" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"

export function WaveShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    let animationFrameId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      for (let layer = 0; layer < 5; layer++) {
        ctx.beginPath()

        const amplitude = 80 - layer * 12
        const frequency = 0.002 + layer * 0.0008
        const speed = time + layer * 0.6
        const opacity = 0.35 - layer * 0.06

        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * frequency + speed) * amplitude +
            Math.sin(x * frequency * 1.5 + speed * 1.3) * (amplitude * 0.5) +
            Math.cos(x * frequency * 0.5 + speed * 0.8) * (amplitude * 0.3) +
            canvas.height * 0.35

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, `rgba(29, 78, 216, ${opacity})`) // blue-700
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${opacity * 0.8})`) // blue-600
        gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * 0.6})`) // blue-500

        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.75 }} />
  )
}

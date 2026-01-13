"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const initialTheme = localStorage.getItem("theme") || "light"
    setIsDark(initialTheme === "dark")
    if (initialTheme === "dark") {
      root.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = isDark ? "light" : "dark"

    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", newTheme)
    setIsDark(!isDark)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  )
}

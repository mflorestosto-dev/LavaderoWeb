"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/icon-dark.png" alt="Logo Lavapresto" className="h-8 w-8 object-contain dark:hidden block" />
            <img src="/icon-white.png" alt="Logo Lavapresto" className="h-8 w-8 object-contain hidden dark:block" />
            <span className="text-xl font-bold text-[#021b74] dark:text-blue-200">Lavanderia Lavapresto</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#companies"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Empresas
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Quienes somos
            </a>
            <Button asChild variant="default" className="rounded-full font-semibold">
              <a href="#contact">Contacto</a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

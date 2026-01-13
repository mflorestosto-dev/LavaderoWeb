"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Abierto de Lunes a Sábados</span>
          </div>

          <h1
            className={`mb-8 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-20 h-20 md:w-28 md:h-28 relative shrink-0">
                <img src="/icon-dark.png" alt="Logo Lavapresto" className="w-full h-full object-contain dark:hidden block" />
                <img src="/icon-white.png" alt="Logo Lavapresto" className="w-full h-full object-contain hidden dark:block" />
              </div>
              <span className="text-6xl md:text-9xl font-genty text-[#021b74] dark:text-blue-200">Lavapresto</span>
            </div>
            <span className="text-3xl md:text-5xl font-genty text-primary block">Tu Lavandería de confianza</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Lavados profesionales, servicio de tintorería, atención a empresas y servicio a domicilio en San Miguel.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Button size="lg" className="text-lg px-10 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all" asChild>
              <a href="#contact">
                Agenda tu pedido
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

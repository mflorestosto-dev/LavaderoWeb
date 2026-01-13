"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function CompaniesSection() {
  return (
    <section id="companies" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-[#021b74] dark:text-blue-200">
                Soluciones Integrales para Empresas
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Elevamos el estándar de higiene de tu negocio. Ofrecemos servicio de lavandería industrial especializado para hoteles, restaurantes, gimnasios y spas, garantizando textiles impecables y entregas puntuales.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Retiro y entrega programada en tu local",
                "Procesos de desinfección",
                "Tratamiento especial para mantelería y ropa de cama",
                "Planes mensuales a medida de tu consumo"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full text-lg px-8 shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contact">Solicitar Presupuesto Corporativo</a>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/lavanderia-para-hoteles.jpg"
              alt="Servicio de lavandería industrial para hoteles"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

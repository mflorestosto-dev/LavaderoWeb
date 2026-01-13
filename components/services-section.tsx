"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const services = [
  {
    name: "Lavado de Ropa",
    image: "/lavado_ropa.webp",
    features: ["Lavado y secado", "Doblado perfecto", "Aroma fresco", "Entrega en 24hs"],
  },
  {
    name: "Tintorería",
    image: "/tintoreria.jpg",
    features: ["Cuidado de telas delicadas", "Tratamiento de manchas", "Planchado profesional", "Inspección de prendas"],
  },
  {
    name: "Lavado de Acolchados",
    image: "/lavado_acolchados.jpg",
    features: ["Limpieza profunda", "Eliminación de ácaros", "Secado especial", "Cuidado de rellenos"],
  },
  {
    name: "Lavado de Pluma",
    image: "/lavado_pluma.jpg",
    features: ["Tratamiento especial", "Recuperación de volumen", "Productos específicos", "Secado controlado"],
  },
  {
    name: "Lavado de Valijas",
    image: "/lavado_valijas.jpg",
    features: ["Limpieza interior y exterior", "Desinfección", "Renovación de aspecto", "Cuidado de materiales"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Desde el lavado diario hasta cuidados especiales, nos encargamos de todo.
          </p>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1, // Velocidad baja y constante
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* Duplicamos los items para asegurar un scroll infinito fluido si hay pocos elementos */}
            {[...services, ...services, ...services].map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 min-w-[300px]">
                <Card
                  className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-accent/10 backdrop-blur-md border-white/20 dark:border-white/10 flex flex-col group hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-card-foreground text-center">{service.name}</h3>

                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
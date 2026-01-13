"use client"

import { useEffect, useState } from "react"

export function AboutUsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-balance transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Acerca de nosotros
          </h2>
          <p
            className={`text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Lavanderia Lavapresto es una empresa de lavado y tintoreria comprometida con brindar servicios de alta calidad y conveniencia a nuestros clientes. Con años de experiencia en la industria, nos enorgullece ofrecer soluciones de lavado que se adaptan a las necesidades individuales de cada cliente, ya sea para uso personal o empresarial.
          </p>
          <p
            className={`text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            En Lavanderia Lavapresto, nos esforzamos por ofrecer un servicio excepcional, utilizando tecnología avanzada y productos ecológicos para garantizar que cada prenda reciba el cuidado que merece. Nuestro equipo de profesionales capacitados está dedicado a superar las expectativas de nuestros clientes, proporcionando resultados impecables en cada lavado y tintoreria.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection;

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AboutUsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Desde 1987
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Un legado de familia y esfuerzo
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nuestra historia comienza con <strong>María Gracia y Francisco</strong>, dos inmigrantes italianos que llegaron al país con el sueño de construir un futuro mejor. En 1987, con mucho sacrificio y una inquebrantable cultura del trabajo, abrieron las puertas de este lavadero.
              </p>
              <p>
                Lo que empezó como un pequeño emprendimiento familiar se convirtió en un pilar de la comunidad, donde cada cliente era tratado como un amigo y cada prenda cuidada como propia.
              </p>
              <p>
                Hoy, <strong>sus hijos y nietos honramos ese legado</strong>. Mantenemos vivos los valores que nos enseñaron nuestros abuelos: honestidad, dedicación y calidez humana, combinándolos con la tecnología actual para seguir brindando el servicio de excelencia que nos caracteriza.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="/Francisco.jpeg" 
                    alt="Francisco, fundador de Lavapresto" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-medium text-sm">Francisco</p>
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/lavapresto.webp" 
                    alt="Local original de Lavapresto" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/lavapresto2.webp" 
                    alt="Interior del lavadero" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="/Maria.jpeg" 
                    alt="María, fundadora de Lavapresto" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-medium text-sm">María Gracia</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection;
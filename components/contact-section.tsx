"use client"

import { Mail, MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contáctanos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte con todas tus necesidades de lavandería.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left Side: Google Maps */}
          <div className="w-full h-[400px] lg:h-full rounded-2xl bg-background/50 border border-border backdrop-blur-sm relative overflow-hidden shadow-inner min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.421366150551!2d-58.707682623533294!3d-34.54288525428942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbdcb4c031a57%3A0xb40c19b85d263994!2sLavapresto!5e0!3m2!1ses-419!2sar!4v1764356165376!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Lavapresto"
              className="grayscale-[0.2] contrast-[1.1]"
            />
          </div>

          {/* Right Side: Contact Info */}
          <div className="grid gap-6 h-full">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 border border-border backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Visítanos</h3>
                <p className="text-muted-foreground">
                  Rodriguez Peña 888, San miguel<br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 border border-border backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Llamanos</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+541112345678" className="hover:text-primary transition-colors">
                    +54 11 6660-8666
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 border border-border backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Escribinos</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:lavapresto888@gmail.com" className="hover:text-primary transition-colors">
                    lavapresto888@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 border border-border backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Horarios</h3>
                <p className="text-muted-foreground">
                  Lun - Sab: 9:00 - 19:00<br />
                  No cerramos al mediodia <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

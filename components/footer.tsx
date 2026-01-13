import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/icon-dark.png" alt="Logo Lavapresto" className="h-10 w-10 object-contain dark:hidden block" />
              <img src="/icon-white.png" alt="Logo Lavapresto" className="h-10 w-10 object-contain hidden dark:block" />
              <span className="text-xl font-bold text-[#021b74] dark:text-blue-200">Lavapresto</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tu lavandería de confianza en San Miguel. Ofrecemos servicios de lavado, tintorería y atención exclusiva a empresas con la mejor calidad y rapidez del mercado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#companies" className="hover:text-primary transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rodriguez Peña 888</li>
              <li>San Miguel, Buenos Aires</li>
              <li>
                <a href="tel:+541166608666" className="hover:text-primary transition-colors">
                  +54 11 6660-8666
                </a>
              </li>
              <li>
                <a href="mailto:lavapresto888@gmail.com" className="hover:text-primary transition-colors">
                  lavapresto888@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Lavandería Lavapresto. Todos los derechos reservados.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
              Creado por{" "}
              <a 
                href="https://github.com/mflorestosto-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                mflorestosto-dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

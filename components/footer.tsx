import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-black.png" alt="Lavanderia Lavapresto" className="h-10 w-auto dark:hidden block" />
              <img src="/logo-white.png" alt="Lavanderia Lavapresto" className="h-10 w-auto hidden dark:block" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicio de lavandería premium directo a tu puerta con el cuidado y la comodidad que mereces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Wash & Fold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Premium Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Lavanderia Lavapresto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

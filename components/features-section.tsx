import { Card } from "@/components/ui/card"
import { Clock, Droplet, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Servicio en el dia",
    description: "Trae tu muda de ropa; nosotros nos encargamos de que esté lista y limpia para la tarde.",
  },
  {
    icon: Droplet,
    title: "Servicio Eco-friendly",
    description: "Utilizamos detergentes biodegradables y procesos eficientes en el uso del agua para un lavado más ecológico.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "¿No estás conforme? Te lo lavamos de nuevo gratis o te devolvemos tu dinero, sin vueltas.",
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Por que elegirnos?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Experimenta un servicio premium con nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-500 bg-accent/10 backdrop-blur-md border-white/20 dark:border-white/10 flex flex-col items-center text-center group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

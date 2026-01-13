"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    alert(`Thank you for signing up! Check ${email} for your 20% off coupon.`)
    setEmail("")
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-accent/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-accent-foreground">
            Ready to Transform Your Laundry Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Join thousands of satisfied customers. Get your first order at 20% off.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="lg">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}

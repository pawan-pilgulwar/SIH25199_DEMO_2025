"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-muted-foreground">SIH 2025 Innovation Project</span>
          </div>

          <h1
            className={`mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Bridge the gap between <span className="text-primary">learning</span> and{" "}
            <span className="text-accent">earning</span>
          </h1>

          <p
            className={`mb-10 text-lg text-muted-foreground text-balance md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            AI-powered platform that creates personalized learning roadmaps for students and connects companies with
            job-ready talent. Smart education for the digital age.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base px-8 hover:scale-105 transition-transform"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent hover:scale-105 transition-transform"
            >
              For Companies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bot, BookOpen, LineChart, MessageSquare, Award, Zap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: Bot,
      title: "Multi-Agent AI System",
      description: "Multiple specialized AI agents work together to create optimal learning paths and match candidates",
    },
    {
      icon: BookOpen,
      title: "Curated Resources",
      description: "Access to high-quality learning materials, tutorials, and projects tailored to your roadmap",
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Real-time monitoring of your learning journey with detailed analytics and insights",
    },
    {
      icon: MessageSquare,
      title: "Mentorship & Community",
      description: "Connect with mentors and peers in your field for guidance and collaboration",
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn verified certificates as you complete milestones in your learning path",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate AI-powered feedback on your projects and skill assessments",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive features designed to make learning effective and hiring efficient
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-none shadow-sm hover:shadow-md transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

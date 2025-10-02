import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Target, Map, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Sign Up & Profile",
      description: "Create your account and tell us about your background, interests, and career aspirations",
    },
    {
      icon: Target,
      number: "02",
      title: "Set Your Goals",
      description: "Define your target role, desired package, and dream companies you want to work for",
    },
    {
      icon: Map,
      number: "03",
      title: "Get Your Roadmap",
      description: "Our AI analyzes your profile and creates a personalized step-by-step learning path",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Learn & Grow",
      description: "Follow your roadmap, complete projects, track progress, and land your dream job",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get started in minutes and transform your career journey with AI-powered guidance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-muted/20">{step.number}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

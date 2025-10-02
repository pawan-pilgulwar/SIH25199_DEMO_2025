import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Building2, ArrowRight, Target, Brain, TrendingUp, Users } from "lucide-react"

export function ModelsSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance">
            Two powerful models, one platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Whether you're a student looking to upskill or a company seeking talent, we've got you covered with
            AI-driven solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Student Model */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Student Model</CardTitle>
              <CardDescription className="text-base">
                Personalized learning paths powered by AI to help you achieve your career goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Target className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Career Goal Setting</h4>
                    <p className="text-sm text-muted-foreground">
                      Define your dream role, desired package, and target companies
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Brain className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Skill Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Intelligent QNA session to understand your current skill level and IQ
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Roadmap</h4>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step learning path with resources, projects, and milestones
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Company Model */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Company Model</CardTitle>
              <CardDescription className="text-base">
                Find job-ready candidates matched to your requirements with AI precision
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Job Posting</h4>
                    <p className="text-sm text-muted-foreground">
                      Define exact skill requirements and let AI find the perfect matches
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Matching</h4>
                    <p className="text-sm text-muted-foreground">
                      Get candidates ranked by skill compatibility and readiness
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reduced Hiring Costs</h4>
                    <p className="text-sm text-muted-foreground">
                      Save lakhs in recruitment and training with pre-skilled candidates
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                Post a Job
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
            Ready to transform your future?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/90 text-balance leading-relaxed">
            Join thousands of students who are already learning smarter and companies hiring faster with our AI-powered
            platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

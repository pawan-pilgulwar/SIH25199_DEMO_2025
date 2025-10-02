import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">SkillBridge</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Bridging the gap between learning and earning with AI-powered personalized education for the digital age.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Skill Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Companies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Post Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Find Talent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SkillBridge. SIH 2025 Innovation Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold">JEMS</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#for-students"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            For Students
          </a>
          <a
            href="#for-companies"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            For Companies
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/student/login">
            Log in
          </Link>
          <Link href="/student/login" className="bg-primary hover:bg-primary/90 text-white p-2 rounded-2xl">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

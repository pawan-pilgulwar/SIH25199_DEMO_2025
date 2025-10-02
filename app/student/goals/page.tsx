"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Shield, Blocks, Brain, Database, Smartphone, ArrowLeft } from "lucide-react"
import Link from "next/link"

const careerPaths = [
  {
    id: "fullstack",
    title: "Full Stack Developer",
    icon: Code,
    description: "Build complete web applications from frontend to backend",
    skills: ["React", "Node.js", "Databases", "APIs"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    icon: Shield,
    description: "Protect systems and networks from digital attacks",
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Management"],
  },
  {
    id: "blockchain",
    title: "Blockchain Developer",
    icon: Blocks,
    description: "Create decentralized applications and smart contracts",
    skills: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
  },
  {
    id: "ai-ml",
    title: "AI/ML Engineer",
    icon: Brain,
    description: "Develop intelligent systems and machine learning models",
    skills: ["Python", "TensorFlow", "Deep Learning", "Data Science"],
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    icon: Database,
    description: "Design and maintain data infrastructure and pipelines",
    skills: ["SQL", "ETL", "Big Data", "Cloud Platforms"],
  },
  {
    id: "mobile-dev",
    title: "Mobile Developer",
    icon: Smartphone,
    description: "Create native and cross-platform mobile applications",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
]

export default function CareerGoalsPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [targetPackage, setTargetPackage] = useState("")
  const [targetCompany, setTargetCompany] = useState("")

  const handleContinue = () => {
    if (selectedPath && targetPackage) {
      window.location.href = "/student/assessment"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 py-12">
        <div className="mb-8">
          <Link
            href="/student/login"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Choose Your Career Path</h1>
          <p className="text-lg text-muted-foreground">
            Select your desired career goal and we'll create a personalized roadmap for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careerPaths.map((path) => {
            const Icon = path.icon
            const isSelected = selectedPath === path.id

            return (
              <Card
                key={path.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? "ring-2 ring-primary shadow-lg" : ""
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {isSelected && <Badge className="bg-primary">Selected</Badge>}
                  </div>
                  <CardTitle className="mt-4">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedPath && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Your Career Goals</CardTitle>
              <CardDescription>Help us understand your aspirations better</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="package">Target Package (LPA)</Label>
                <Input
                  id="package"
                  type="number"
                  placeholder="e.g., 12"
                  value={targetPackage}
                  onChange={(e) => setTargetPackage(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Dream Company (Optional)</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="e.g., Google, Microsoft, Amazon"
                  value={targetCompany}
                  onChange={(e) => setTargetCompany(e.target.value)}
                />
              </div>
              <Button onClick={handleContinue} className="w-full" disabled={!targetPackage}>
                Continue to Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

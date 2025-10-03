"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Circle,
  Sparkles,
  TrendingUp,
  Target,
  Award,
  ExternalLink,
  Play,
  FileText,
  Code,
  Video,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const roadmapData = {
  title: "Full Stack Developer Roadmap",
  targetRole: "Full Stack Developer",
  targetPackage: "12 LPA",
  estimatedDuration: "6-8 months",
  phases: [
    {
      id: 1,
      title: "Foundation Phase",
      duration: "6-8 weeks",
      status: "current",
      modules: [
        {
          id: 1,
          title: "HTML & CSS Fundamentals",
          duration: "2 weeks",
          difficulty: "Beginner",
          topics: ["HTML5 Semantic Elements", "CSS Flexbox & Grid", "Responsive Design", "CSS Animations"],
          resources: [
            { type: "video", title: "HTML & CSS Crash Course", url: "#", duration: "4 hours" },
            { type: "article", title: "MDN Web Docs - HTML", url: "#" },
            { type: "project", title: "Build a Portfolio Website", url: "#" },
          ],
          skills: ["HTML5", "CSS3", "Responsive Design"],
        },
        {
          id: 2,
          title: "JavaScript Essentials",
          duration: "3 weeks",
          difficulty: "Beginner",
          topics: ["Variables & Data Types", "Functions & Scope", "DOM Manipulation", "ES6+ Features", "Async/Await"],
          resources: [
            { type: "video", title: "JavaScript Complete Course", url: "#", duration: "12 hours" },
            { type: "article", title: "JavaScript.info Tutorial", url: "#" },
            { type: "project", title: "Interactive Todo App", url: "#" },
          ],
          skills: ["JavaScript", "ES6+", "DOM"],
        },
        {
          id: 3,
          title: "Git & Version Control",
          duration: "1 week",
          difficulty: "Beginner",
          topics: ["Git Basics", "Branching & Merging", "GitHub Workflow", "Collaboration"],
          resources: [
            { type: "video", title: "Git & GitHub for Beginners", url: "#", duration: "2 hours" },
            { type: "article", title: "Pro Git Book", url: "#" },
            { type: "project", title: "Contribute to Open Source", url: "#" },
          ],
          skills: ["Git", "GitHub", "Version Control"],
        },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      duration: "8-10 weeks",
      status: "upcoming",
      modules: [
        {
          id: 4,
          title: "React Fundamentals",
          duration: "3 weeks",
          difficulty: "Intermediate",
          topics: ["Components & Props", "State & Lifecycle", "Hooks", "Context API", "React Router"],
          resources: [
            { type: "video", title: "React - The Complete Guide", url: "#", duration: "40 hours" },
            { type: "article", title: "React Official Documentation", url: "#" },
            { type: "project", title: "E-commerce Product Catalog", url: "#" },
          ],
          skills: ["React", "JSX", "Hooks", "State Management"],
        },
        {
          id: 5,
          title: "Advanced React & State Management",
          duration: "2 weeks",
          difficulty: "Intermediate",
          topics: ["Redux Toolkit", "React Query", "Performance Optimization", "Testing with Jest"],
          resources: [
            { type: "video", title: "Advanced React Patterns", url: "#", duration: "8 hours" },
            { type: "article", title: "Redux Toolkit Documentation", url: "#" },
            { type: "project", title: "Social Media Dashboard", url: "#" },
          ],
          skills: ["Redux", "React Query", "Testing"],
        },
        {
          id: 6,
          title: "TypeScript & Modern Tooling",
          duration: "2 weeks",
          difficulty: "Intermediate",
          topics: ["TypeScript Basics", "Type Safety", "Interfaces & Types", "Webpack & Vite"],
          resources: [
            { type: "video", title: "TypeScript for React Developers", url: "#", duration: "6 hours" },
            { type: "article", title: "TypeScript Handbook", url: "#" },
            { type: "project", title: "Type-safe React App", url: "#" },
          ],
          skills: ["TypeScript", "Type Safety", "Build Tools"],
        },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      duration: "8-10 weeks",
      status: "upcoming",
      modules: [
        {
          id: 7,
          title: "Node.js & Express",
          duration: "3 weeks",
          difficulty: "Intermediate",
          topics: ["Node.js Fundamentals", "Express Framework", "RESTful APIs", "Middleware", "Authentication"],
          resources: [
            { type: "video", title: "Node.js Complete Course", url: "#", duration: "15 hours" },
            { type: "article", title: "Express.js Documentation", url: "#" },
            { type: "project", title: "REST API for Blog Platform", url: "#" },
          ],
          skills: ["Node.js", "Express", "REST APIs"],
        },
        {
          id: 8,
          title: "Databases & ORMs",
          duration: "3 weeks",
          difficulty: "Intermediate",
          topics: ["SQL Fundamentals", "PostgreSQL", "MongoDB", "Prisma ORM", "Database Design"],
          resources: [
            { type: "video", title: "Database Design & SQL", url: "#", duration: "10 hours" },
            { type: "article", title: "PostgreSQL Tutorial", url: "#" },
            { type: "project", title: "Full-stack CRUD Application", url: "#" },
          ],
          skills: ["SQL", "PostgreSQL", "MongoDB", "Prisma"],
        },
        {
          id: 9,
          title: "Authentication & Security",
          duration: "2 weeks",
          difficulty: "Advanced",
          topics: ["JWT", "OAuth 2.0", "Password Hashing", "CORS", "Security Best Practices"],
          resources: [
            { type: "video", title: "Web Security Fundamentals", url: "#", duration: "6 hours" },
            { type: "article", title: "OWASP Security Guidelines", url: "#" },
            { type: "project", title: "Secure Authentication System", url: "#" },
          ],
          skills: ["JWT", "OAuth", "Security"],
        },
      ],
    },
    {
      id: 4,
      title: "Full Stack Integration & Deployment",
      duration: "4-6 weeks",
      status: "upcoming",
      modules: [
        {
          id: 10,
          title: "Next.js & Server-Side Rendering",
          duration: "2 weeks",
          difficulty: "Advanced",
          topics: ["Next.js App Router", "Server Components", "API Routes", "Static Generation", "SEO"],
          resources: [
            { type: "video", title: "Next.js 14 Complete Guide", url: "#", duration: "12 hours" },
            { type: "article", title: "Next.js Documentation", url: "#" },
            { type: "project", title: "Full-stack Next.js App", url: "#" },
          ],
          skills: ["Next.js", "SSR", "SEO"],
        },
        {
          id: 11,
          title: "Cloud Deployment & DevOps",
          duration: "2 weeks",
          difficulty: "Advanced",
          topics: ["Docker Basics", "CI/CD Pipelines", "Vercel/Netlify", "AWS/GCP Basics", "Monitoring"],
          resources: [
            { type: "video", title: "DevOps for Developers", url: "#", duration: "8 hours" },
            { type: "article", title: "Docker Documentation", url: "#" },
            { type: "project", title: "Deploy Production App", url: "#" },
          ],
          skills: ["Docker", "CI/CD", "Cloud Platforms"],
        },
      ],
    },
    {
      id: 5,
      title: "Job Preparation & Portfolio",
      duration: "4-6 weeks",
      status: "upcoming",
      modules: [
        {
          id: 12,
          title: "Data Structures & Algorithms",
          duration: "3 weeks",
          difficulty: "Advanced",
          topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design Basics"],
          resources: [
            { type: "video", title: "DSA Complete Course", url: "#", duration: "30 hours" },
            { type: "article", title: "LeetCode Study Plan", url: "#" },
            { type: "project", title: "Solve 100 LeetCode Problems", url: "#" },
          ],
          skills: ["DSA", "Problem Solving", "System Design"],
        },
        {
          id: 13,
          title: "Portfolio & Interview Prep",
          duration: "2 weeks",
          difficulty: "Advanced",
          topics: ["Portfolio Projects", "Resume Building", "Mock Interviews", "Behavioral Questions"],
          resources: [
            { type: "video", title: "Interview Preparation Guide", url: "#", duration: "5 hours" },
            { type: "article", title: "Portfolio Best Practices", url: "#" },
            { type: "project", title: "Build 3 Portfolio Projects", url: "#" },
          ],
          skills: ["Portfolio", "Interview Skills", "Communication"],
        },
      ],
    },
  ],
}

export default function RoadmapPage() {
  const [isGenerating, setIsGenerating] = useState(true)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [showRoadmap, setShowRoadmap] = useState(false)

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setGenerationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setIsGenerating(false)
              setShowRoadmap(true)
            }, 500)
            return 100
          }
          return prev + 2
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isGenerating])

  const handleStartLearning = (moduleId: number) => {
    window.location.href = `/student/learn/${moduleId}`
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit animate-pulse">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl mb-2">Generating Your Personalized Roadmap</CardTitle>
            <CardDescription className="text-base">
              Our AI is analyzing your profile and creating a customized learning path tailored to your goals...
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-primary">{generationProgress}%</span>
              </div>
              <Progress value={generationProgress} className="h-3" />
            </div>

            <div className="grid gap-3">
              {[
                { label: "Analyzing your skill level", done: generationProgress > 20 },
                { label: "Identifying knowledge gaps", done: generationProgress > 40 },
                { label: "Curating learning resources", done: generationProgress > 60 },
                { label: "Creating milestone timeline", done: generationProgress > 80 },
                { label: "Finalizing your roadmap", done: generationProgress > 95 },
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  {step.done ? (
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <span className={`text-sm ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!showRoadmap) return null

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "article":
        return <FileText className="h-4 w-4" />
      case "project":
        return <Code className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "Advanced":
        return "bg-red-500/10 text-red-700 dark:text-red-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto p-6 py-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary">AI Generated</Badge>
                <Badge variant="outline">Personalized</Badge>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{roadmapData.title}</h1>
              <p className="text-lg text-muted-foreground">
                Your personalized path to becoming a {roadmapData.targetRole}
              </p>
            </div>
            <Button size="lg" className="gap-2" onClick={() => handleStartLearning(1)}>
              <Play className="h-4 w-4" />
              Start Learning
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Target Package</p>
                  <p className="font-semibold">{roadmapData.targetPackage}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold">{roadmapData.estimatedDuration}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Modules</p>
                  <p className="font-semibold">13 Modules</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Progress</p>
                  <p className="font-semibold">0% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="max-w-7xl mx-auto p-6 py-12">
        <div className="space-y-8">
          {roadmapData.phases.map((phase, phaseIndex) => (
            <div key={phase.id} className="relative">
              {/* Phase Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      phase.status === "current"
                        ? "bg-primary text-primary-foreground"
                        : phase.status === "completed"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {phaseIndex + 1}
                  </div>
                  {phaseIndex < roadmapData.phases.length - 1 && (
                    <div className="w-0.5 h-full min-h-[100px] bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{phase.title}</h2>
                    {phase.status === "current" && <Badge className="bg-primary">Current Phase</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{phase.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{phase.modules.length} modules</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="ml-16 space-y-4">
                {phase.modules.map((module) => (
                  <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`module-${module.id}`} className="border-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                          <div className="flex items-start gap-4 flex-1 text-left">
                            <div className="p-2 bg-primary/10 rounded-lg mt-1">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg">{module.title}</h3>
                                <Badge className={getDifficultyColor(module.difficulty)} variant="secondary">
                                  {module.difficulty}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{module.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Award className="h-3 w-3" />
                                  <span>{module.skills.length} skills</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="space-y-6 pt-4">
                            {/* Topics */}
                            <div>
                              <h4 className="font-medium mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary" />
                                Topics Covered
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {module.topics.map((topic, index) => (
                                  <Badge key={index} variant="outline">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Resources */}
                            <div>
                              <h4 className="font-medium mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-primary" />
                                Learning Resources
                              </h4>
                              <div className="grid gap-3">
                                {module.resources.map((resource, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 bg-background rounded">{getResourceIcon(resource.type)}</div>
                                      <div>
                                        <p className="font-medium text-sm">{resource.title}</p>
                                        {resource.duration && (
                                          <p className="text-xs text-muted-foreground">{resource.duration}</p>
                                        )}
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-2">
                                      View
                                      <ExternalLink className="h-3 w-3" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="font-medium mb-3 flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                Skills You'll Gain
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {module.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-primary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button className="w-full" size="lg" onClick={() => handleStartLearning(module.id)}>
                              <Play className="mr-2 h-4 w-4" />
                              Start This Module
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Card */}
        <Card className="mt-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Ready to Start Your Journey?</CardTitle>
            <CardDescription className="text-base">
              Follow this roadmap consistently and you'll be job-ready in {roadmapData.estimatedDuration}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => handleStartLearning(1)}>
              <Play className="h-4 w-4" />
              Begin Learning
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <ExternalLink className="h-4 w-4" />
              Download Roadmap
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

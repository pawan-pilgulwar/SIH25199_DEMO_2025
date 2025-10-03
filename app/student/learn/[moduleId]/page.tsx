"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Play, Code, CheckCircle2, ArrowRight, ArrowLeft, Video, Lightbulb, FileText, Trophy } from "lucide-react"

export default function LearningModulePage({ params }: { params: { moduleId: string } }) {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [showTest, setShowTest] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [testCompleted, setTestCompleted] = useState(false)
  const [testScore, setTestScore] = useState<number | null>(null)

  const moduleData = {
    id: params.moduleId,
    title: "HTML & CSS Fundamentals",
    description: "Master the building blocks of web development",
    duration: "2 weeks",
    progress: 25,
    lessons: [
      { id: 1, title: "Introduction to HTML5", duration: "45 min", type: "video" },
      { id: 2, title: "Semantic HTML Elements", duration: "30 min", type: "video" },
      { id: 3, title: "CSS Basics & Selectors", duration: "50 min", type: "video" },
      { id: 4, title: "Flexbox Layout", duration: "60 min", type: "video" },
      { id: 5, title: "CSS Grid System", duration: "55 min", type: "video" },
    ],
    quiz: {
      title: "Module Assessment Quiz",
      questions: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          question: "Which CSS property is used to change the text color?",
          options: ["text-color", "font-color", "color", "text-style"],
          correctAnswer: 2,
        },
        {
          id: 3,
          question: "What is the correct HTML element for the largest heading?",
          options: ["<heading>", "<h6>", "<h1>", "<head>"],
          correctAnswer: 2,
        },
        {
          id: 4,
          question: "Which property is used to change the background color in CSS?",
          options: ["bgcolor", "background-color", "color", "bg-color"],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "What is Flexbox used for in CSS?",
          options: ["Creating flexible layouts", "Adding animations", "Changing colors", "Creating databases"],
          correctAnswer: 0,
        },
      ],
    },
    miniProject: {
      id: 1,
      title: "Build a Personal Portfolio Card",
      description:
        "Create a responsive portfolio card showcasing your profile, skills, and contact information using HTML and CSS",
      difficulty: "Medium",
      duration: "3 hours",
      requirements: [
        "Use semantic HTML5 elements",
        "Implement Flexbox for layout",
        "Add hover effects and transitions",
        "Make it responsive for mobile devices",
        "Include profile image, bio, and skills section",
      ],
    },
  }

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson])
    }
    if (currentLesson < moduleData.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
      setShowTest(false)
    } else {
      setShowTest(true)
    }
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < moduleData.quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitTest = () => {
    let correct = 0
    moduleData.quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer.toString()) {
        correct++
      }
    })
    const score = Math.round((correct / moduleData.quiz.questions.length) * 100)
    setTestScore(score)
    setTestCompleted(true)
  }

  const currentLessonData = moduleData.lessons[currentLesson]
  const currentQuizQuestion = moduleData.quiz.questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>Module {moduleData.id}</Badge>
                <Badge variant="outline">{moduleData.duration}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground">{moduleData.title}</h1>
              <p className="text-muted-foreground mt-1">{moduleData.description}</p>
            </div>
            <Button variant="outline" onClick={() => (window.location.href = "/student/roadmap")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roadmap
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="font-medium text-primary">{moduleData.progress}%</span>
            </div>
            <Progress value={moduleData.progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="learn" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="learn" className="gap-2">
              <Video className="h-4 w-4" />
              Learn & Test
            </TabsTrigger>
            <TabsTrigger value="mini-project" className="gap-2">
              <Code className="h-4 w-4" />
              Mini Project
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {!showTest ? (
                  <>
                    <Card>
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-grid-white/10" />
                          <div className="relative z-10 text-center space-y-4">
                            <div className="mx-auto p-4 bg-background/80 backdrop-blur-sm rounded-full w-fit">
                              <Play className="h-12 w-12 text-primary" />
                            </div>
                            <div className="space-y-2">
                              <p className="text-lg font-semibold text-foreground">AI Generated Video Content</p>
                              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                This is where the AI-generated educational video will be displayed
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{currentLessonData.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-2">
                              <Video className="h-4 w-4" />
                              {currentLessonData.duration}
                            </CardDescription>
                          </div>
                          {completedLessons.includes(currentLesson) && (
                            <Badge className="bg-green-500">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">What you'll learn:</p>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Understanding the fundamentals of {currentLessonData.title.toLowerCase()}</li>
                                <li>• Practical examples and real-world applications</li>
                                <li>• Best practices and common pitfalls to avoid</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                            disabled={currentLesson === 0}
                            className="flex-1"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous
                          </Button>
                          <Button onClick={handleCompleteLesson} className="flex-1">
                            {currentLesson === moduleData.lessons.length - 1 ? "Take Quiz" : "Next Lesson"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <>
                    {!testCompleted ? (
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle>{moduleData.quiz.title}</CardTitle>
                              <CardDescription>
                                Question {currentQuestion + 1} of {moduleData.quiz.questions.length}
                              </CardDescription>
                            </div>
                            <Badge variant="outline">
                              <FileText className="h-3 w-3 mr-1" />
                              Quiz
                            </Badge>
                          </div>
                          <Progress
                            value={((currentQuestion + 1) / moduleData.quiz.questions.length) * 100}
                            className="h-2 mt-4"
                          />
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">{currentQuizQuestion.question}</h3>
                            <RadioGroup
                              value={selectedAnswers[currentQuestion]}
                              onValueChange={(value) => handleAnswerSelect(currentQuestion, value)}
                            >
                              {currentQuizQuestion.options.map((option, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:bg-muted/50 transition-colors cursor-pointer"
                                >
                                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                                    {option}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              onClick={handlePreviousQuestion}
                              disabled={currentQuestion === 0}
                              className="flex-1 bg-transparent"
                            >
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Previous
                            </Button>
                            {currentQuestion === moduleData.quiz.questions.length - 1 ? (
                              <Button
                                onClick={handleSubmitTest}
                                disabled={Object.keys(selectedAnswers).length !== moduleData.quiz.questions.length}
                                className="flex-1"
                              >
                                Submit Quiz
                                <CheckCircle2 className="ml-2 h-4 w-4" />
                              </Button>
                            ) : (
                              <Button onClick={handleNextQuestion} className="flex-1">
                                Next Question
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
                        <CardContent className="p-8 text-center space-y-6">
                          <div className="mx-auto p-4 bg-background rounded-full w-fit">
                            <Trophy className="h-16 w-16 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Quiz Completed!</h2>
                            <p className="text-5xl font-bold text-primary">{testScore}%</p>
                            <p className="text-muted-foreground">
                              {testScore! >= 80
                                ? "Excellent work! You've mastered this module."
                                : testScore! >= 60
                                  ? "Good job! Keep practicing to improve."
                                  : "Keep learning! Review the lessons and try again."}
                            </p>
                          </div>
                          <div className="flex gap-3 justify-center">
                            <Button
                              variant="outline"
                              onClick={() => {
                                setShowTest(false)
                                setTestCompleted(false)
                                setCurrentQuestion(0)
                                setSelectedAnswers({})
                                setTestScore(null)
                              }}
                            >
                              Review Lessons
                            </Button>
                            <Button onClick={() => (window.location.href = "/student/roadmap")}>
                              Continue to Next Module
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Course Content</CardTitle>
                    <CardDescription>
                      {completedLessons.length} of {moduleData.lessons.length} lessons completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {moduleData.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          currentLesson === index && !showTest
                            ? "border-primary bg-primary/5"
                            : completedLessons.includes(index)
                              ? "border-green-500/20 bg-green-500/5"
                              : "border-border hover:bg-muted/50"
                        }`}
                        onClick={() => {
                          setCurrentLesson(index)
                          setShowTest(false)
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {completedLessons.includes(index) ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        showTest ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => {
                        if (completedLessons.length === moduleData.lessons.length) {
                          setShowTest(true)
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {testCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">Module Quiz</p>
                          <p className="text-xs text-muted-foreground">{moduleData.quiz.questions.length} questions</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mini-project" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{moduleData.miniProject.title}</CardTitle>
                    <CardDescription className="mt-2">{moduleData.miniProject.description}</CardDescription>
                  </div>
                  <Badge
                    className={
                      moduleData.miniProject.difficulty === "Easy"
                        ? "bg-green-500/10 text-green-700 dark:text-green-400"
                        : moduleData.miniProject.difficulty === "Medium"
                          ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                          : "bg-red-500/10 text-red-700 dark:text-red-400"
                    }
                  >
                    {moduleData.miniProject.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/10" />
                  <div className="relative z-10 text-center space-y-3">
                    <div className="mx-auto p-4 bg-background/80 backdrop-blur-sm rounded-full w-fit">
                      <Code className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">AI Generated Project Template</p>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Starter code, design mockups, and step-by-step instructions will be provided
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Project Requirements
                  </h3>
                  <ul className="space-y-2">
                    {moduleData.miniProject.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-background rounded">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Duration</p>
                      <p className="text-xs text-muted-foreground">{moduleData.miniProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-background rounded">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Difficulty</p>
                      <p className="text-xs text-muted-foreground">{moduleData.miniProject.difficulty}</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  <Code className="mr-2 h-5 w-5" />
                  Start Mini Project
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

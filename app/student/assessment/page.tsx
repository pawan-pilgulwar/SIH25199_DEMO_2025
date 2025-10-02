"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

const questions = [
  {
    id: 1,
    category: "Logical Reasoning",
    question: "Find the missing number in the sequence: 2, 6, 12, 20, 30, ?",
    options: [
      { value: "40", label: "40" },
      { value: "42", label: "42" },
      { value: "44", label: "44" },
      { value: "46", label: "46" },
    ],
    correctAnswer: "42",
  },
  {
    id: 2,
    category: "Problem Solving",
    question: "If 2 pens cost ₹30, how much do 5 pens cost?",
    options: [
      { value: "60", label: "₹60" },
      { value: "65", label: "₹65" },
      { value: "75", label: "₹75" },
      { value: "80", label: "₹80" },
    ],
    correctAnswer: "75",
  },
  {
    id: 3,
    category: "Analytical Thinking",
    question: "If demand increases and supply decreases, what happens to price?",
    options: [
      { value: "increases", label: "Price increases" },
      { value: "decreases", label: "Price decreases" },
      { value: "stays", label: "Price stays the same" },
      { value: "unpredictable", label: "Unpredictable" },
    ],
    correctAnswer: "increases",
  },
  {
    id: 4,
    category: "Numerical Aptitude",
    question: "A car travels 60 km in 1 hour. How far will it travel in 2.5 hours at the same speed?",
    options: [
      { value: "120", label: "120 km" },
      { value: "130", label: "130 km" },
      { value: "140", label: "140 km" },
      { value: "150", label: "150 km" },
    ],
    correctAnswer: "150",
  },
  {
    id: 5,
    category: "Verbal Comprehension",
    question: "Choose the word that is most similar in meaning to 'INNOVATIVE':",
    options: [
      { value: "traditional", label: "Traditional" },
      { value: "creative", label: "Creative" },
      { value: "ordinary", label: "Ordinary" },
      { value: "simple", label: "Simple" },
    ],
    correctAnswer: "creative",
  },
  {
    id: 6,
    category: "Abstract Reasoning",
    question: "Which shape completes the pattern: Circle, Square, Triangle, Circle, Square, ?",
    options: [
      { value: "circle", label: "Circle" },
      { value: "square", label: "Square" },
      { value: "triangle", label: "Triangle" },
      { value: "rectangle", label: "Rectangle" },
    ],
    correctAnswer: "triangle",
  },
  {
    id: 7,
    category: "Logical Reasoning",
    question: "All roses are flowers. Some flowers fade quickly. Therefore:",
    options: [
      { value: "all-roses", label: "All roses fade quickly" },
      { value: "some-roses", label: "Some roses may fade quickly" },
      { value: "no-roses", label: "No roses fade quickly" },
      { value: "cannot", label: "Cannot be determined" },
    ],
    correctAnswer: "some-roses",
  },
  {
    id: 8,
    category: "Numerical Aptitude",
    question: "What is 15% of 200?",
    options: [
      { value: "25", label: "25" },
      { value: "30", label: "30" },
      { value: "35", label: "35" },
      { value: "40", label: "40" },
    ],
    correctAnswer: "30",
  },
  {
    id: 9,
    category: "Situational Judgement",
    question: "You are given a project deadline of 2 days, but you need 3 days to finish properly. What do you do?",
    options: [
      { value: "rush", label: "Rush and submit incomplete work" },
      { value: "communicate", label: "Communicate with stakeholders and negotiate timeline" },
      { value: "ignore", label: "Ignore the deadline and take 3 days" },
      { value: "quit", label: "Quit the project" },
    ],
    correctAnswer: "communicate",
  },
  {
    id: 10,
    category: "Analytical Thinking",
    question: "In a class of 40 students, 60% are girls. How many boys are there?",
    options: [
      { value: "12", label: "12" },
      { value: "14", label: "14" },
      { value: "16", label: "16" },
      { value: "18", label: "18" },
    ],
    correctAnswer: "16",
  },
  {
    id: 11,
    category: "Verbal Comprehension",
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "carrot", label: "Carrot" },
      { value: "mango", label: "Mango" },
    ],
    correctAnswer: "carrot",
  },
  {
    id: 12,
    category: "Critical Thinking",
    question: "A team member consistently misses deadlines. As a leader, what's your best approach?",
    options: [
      { value: "ignore", label: "Ignore and hope it improves" },
      { value: "fire", label: "Immediately remove them from the team" },
      { value: "discuss", label: "Have a private discussion to understand and address the issue" },
      { value: "complain", label: "Complain to upper management" },
    ],
    correctAnswer: "discuss",
  },
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleGenerateRoadmap = () => {
    window.location.href = "/student/roadmap"
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
            <CardDescription>
              Great job! We've analyzed your responses and are ready to generate your personalized learning roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg text-left">
                <p className="text-sm font-medium mb-2">Your Profile Summary:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Questions answered: {Object.keys(answers).length}</li>
                  <li>• Logical reasoning: Assessed</li>
                  <li>• Analytical thinking: Evaluated</li>
                  <li>• Problem-solving skills: Measured</li>
                </ul>
              </div>
              <Button onClick={handleGenerateRoadmap} className="w-full" size="lg">
                Generate My Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">IQ & Skill Assessment</h1>
              <p className="text-sm text-muted-foreground mt-1">Category: {currentQ.category}</p>
            </div>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            <CardDescription>Select the option that best answers the question</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={currentAnswer} onValueChange={handleAnswer} className="space-y-3">
              {currentQ.options.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50 ${
                    currentAnswer === option.value ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => handleAnswer(option.value)}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex-1 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!currentAnswer} className="flex-1">
                {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

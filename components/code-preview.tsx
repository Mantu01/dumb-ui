"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CodeDisplayProps {
  code: string
  language: string
  title: string
}

export function CodeDisplay({ code, language, title }: CodeDisplayProps) {
  const lines = code.split('\n')
  
  return (
    <Card className="bg-gray-900 border-2 border-yellow-400">
      <CardContent className="p-0">
        <div className="bg-yellow-400 px-4 py-2">
          <span className="font-black text-black" style={{ fontFamily: "Comic Sans MS" }}>
            {title}
          </span>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 w-8 text-right pr-2 select-none">
                {index + 1}
              </span>
              <code className="flex-1">
                {line.split('').map((char, charIndex) => {
                  let color = "text-white"
                  if (char === '<' || char === '>' || char === '/' || char === '=') {
                    color = "text-pink-400"
                  } else if (char === '"' || char === "'") {
                    color = "text-yellow-300"
                  } else if (char === '{' || char === '}') {
                    color = "text-cyan-400"
                  } else if (char.match(/[a-zA-Z]/)) {
                    color = "text-lime-300"
                  } else if (char.match(/[0-9]/)) {
                    color = "text-orange-400"
                  }
                  return (
                    <span key={charIndex} className={color}>
                      {char}
                    </span>
                  )
                })}
              </code>
            </div>
          ))}
        </pre>
      </CardContent>
    </Card>
  )
}
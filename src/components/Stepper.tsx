'use client'
import { useState } from "react"

import { Minus, Plus } from 'lucide-react'

export function Stepper() {
  const [step, setStep] = useState(0)

  function addStepHandler() {
    setStep(step + 1)
  }

  function subtractStepHandler() {
    if (step === 0) return

    setStep(step - 1)
  }

  return (
    <div className="flex">    
      <button 
        className="text-purple-200 bg-transparent w-10 h-10 border-2 rounded-lg border-neutral-400 flex items-center justify-center hover:text-neutral-100 hover:border-purple-300 transition-colors"
        onClick={subtractStepHandler}
      >
        <Minus size={16} />
      </button>

      <p className="w-10 h-10 text-center flex items-center justify-center">{step}</p>   

      <button 
        className="hover:text-neutral-100 hover:bg-purple-300 text-purple-200 bg-transparent w-10 h-10 border-2 rounded-lg border-purple-300 flex items-center justify-center transition-colors"
        onClick={addStepHandler}
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
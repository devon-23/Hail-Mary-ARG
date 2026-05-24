import { useState } from 'react'
import { questions } from '../data/questions'

export default function CognitiveAssessment({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const question = questions[currentQuestion]

  function handleSubmit(e) {
    e.preventDefault()

    if (question.isNameQuestion) {
      onComplete(input)
      return
    }

    if (input.trim() === question.answer) {
      setError('')
      setInput('')
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setError('ERROR :: RESPONSE INVALID')
    }
  }

  return (
    <div className="assessment-screen">
      <div className="assessment-terminal">
        <div className="window-topbar">
          <div className="window-buttons">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>COGNITIVE RECOVERY INTERFACE</span>
        </div>

        <div className="assessment-content">
          <p className="system-line">
            NEURAL RECOVERY PROTOCOL ACTIVE
          </p>

          <p className="question">{question.question}</p>

          <form onSubmit={handleSubmit}>
            <div className="input-line">
              <span className="prompt">&gt;</span>

              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="terminal-input"
              />
            </div>
          </form>

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  )
}
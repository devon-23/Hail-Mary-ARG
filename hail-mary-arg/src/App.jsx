import { useState } from 'react'
import BootSequence from './components/BootSequence'
import CognitiveAssessment from './components/CognitiveAssessment'
import TerminalDesktop from './components/TerminalDesktop'

export default function App() {
  const [stage, setStage] = useState('boot')
  const [playerName, setPlayerName] = useState('')

  return (
    <div className="app">
      {stage === 'boot' && (
        <BootSequence onComplete={() => setStage('assessment')} />
      )}

      {stage === 'assessment' && (
        <CognitiveAssessment
          onComplete={(name) => {
            setPlayerName(name)
            setStage('desktop')
          }}
        />
      )}

      {stage === 'desktop' && (
        <TerminalDesktop playerName={playerName} />
      )}
    </div>
  )
}
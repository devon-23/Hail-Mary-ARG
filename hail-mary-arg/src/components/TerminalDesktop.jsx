import { useState } from 'react'
import TerminalWindow from './TerminalWindow'
import TopBar from './TopBar'

export default function TerminalDesktop({ playerName }) {
  const [activeWindow, setActiveWindow] = useState('messages')

  return (
    <div className="desktop">
      <TopBar playerName={playerName} />

      <div className="sidebar">
        <button onClick={() => setActiveWindow('logs')}>
          [ SHIP LOGS ]
        </button>

        <button onClick={() => setActiveWindow('systems')}>
          [ SYSTEM STATUS ]
        </button>

        <button onClick={() => setActiveWindow('reactor')}>
          [ ASTROPHAGE REACTOR ]
        </button>

        <button
          className="alert-button"
          onClick={() => setActiveWindow('messages')}
        >
          [ INCOMING MESSAGES ]
          <span className="alert-dot"></span>
        </button>
      </div>

      <div className="workspace">
        <TerminalWindow type={activeWindow} />
      </div>
    </div>
  )
}
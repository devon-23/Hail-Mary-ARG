export default function TerminalWindow({ type }) {
  const content = {
    logs: `
SHIP LOG 01
---------------------------------
CREW STATUS: UNKNOWN
MISSION STATUS: ACTIVE
MEMORY LOSS DETECTED
AUTOMATED MEDICAL SYSTEMS ENGAGED

LAST KNOWN COURSE:
TAU CETI SYSTEM
`,

    systems: `
SYSTEM STATUS
---------------------------------
LIFE SUPPORT: STABLE
ROTATION: ACTIVE
CENTRIFUGAL RING: ONLINE
SPIN DRIVES: OFFLINE
COMMUNICATION ARRAY: DEGRADED
`,

    reactor: `
ASTROPHAGE REACTOR
---------------------------------
CORE TEMP: NORMAL
FUEL RESERVES: 81%
THRUST POTENTIAL: OPTIMAL
WARNING:
MINOR CONTAINMENT INSTABILITY
`,

    messages: `
>>> PRIORITY MESSAGE DETECTED

DR GRACE,

IF YOU ARE READING THIS,
THE AUTOMATED WAKE SEQUENCE HAS ACTIVATED.

YOU WERE NOT SCHEDULED TO WAKE THIS EARLY.

SOMETHING HAS GONE WRONG.

CHECK CREW STATUS IMMEDIATELY.
`,
  }

  return (
    <div className="terminal-window">
      <div className="window-topbar">
        <div className="window-buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="window-title">
          {type.toUpperCase()}
        </span>
      </div>

      <div className="window-content">
        {type === 'messages' && (
          <p className="message-alert">
            !!! NEW PRIORITY TRANSMISSION !!!
          </p>
        )}

        <pre>{content[type]}</pre>
      </div>
    </div>
  )
}
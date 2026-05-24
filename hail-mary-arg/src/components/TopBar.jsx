export default function TopBar({ playerName }) {
  return (
    <div className="topbar">
      <span>HAIL MARY TERMINAL OS</span>
      <span>USER: {playerName.toUpperCase()}</span>
    </div>
  )
}
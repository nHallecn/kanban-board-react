import React from 'react'
import Board from './components/Board';

const App = () => {
  return (
    <div style = {s.page}>
      <header style={s.header}>
        <div style={s.logo}>
          <span style = {s.logoIcon}>⊞</span>
          <span style = {s.logoText}>Kanban Board</span>
        </div>
        <p style={s.sub}>Drag cards between the columns to update their status</p>
      </header>
      <main style={s.main}>
        <Board />
      </main>
    </div>
  )
}

export default App
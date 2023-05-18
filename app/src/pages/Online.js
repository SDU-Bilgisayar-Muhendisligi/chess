import React from 'react'
import Chess from '../game/gameOffline/chess'
import GameHeader from '../components/GameHeader'
import BoardThemeToggle from '../components/BoardThemeToggle'
import Time from '../components/Time'

function Online() {
  return (
    <div>
    <GameHeader/>
    <Time/>
     <Chess/>
     <BoardThemeToggle/>
     <Time/>
     </div>
  )
}

export default Online
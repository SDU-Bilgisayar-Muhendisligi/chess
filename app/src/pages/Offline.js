import React from 'react'
import Chess from '../game/gameOffline/chess'
import GameHeader from '../components/GameHeader'
import BoardThemeToggle from '../components/BoardThemeToggle'
function Offline() {
  return (
    <div>
      
    <GameHeader/>
    
     <Chess/>
     <BoardThemeToggle/>
     </div>
  )
}

export default Offline
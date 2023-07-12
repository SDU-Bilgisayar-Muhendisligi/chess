import React from 'react'
import ChessOff from '../game/gameOffline/ChessOff'
import GameHeader from '../components/GameHeader'
import BoardThemeToggle from '../components/BoardThemeToggle'
function Offline() {
  return (
    <div>
      
    <GameHeader/>
    
     <ChessOff/>
    
     </div>
  )
}

export default Offline
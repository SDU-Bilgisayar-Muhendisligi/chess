import React from 'react'
import ChessOnline from '../game/gameOnline/ChessOnline'
import GameHeader from '../components/GameHeader'
import BoardThemeToggle from '../components/BoardThemeToggle'
import Time from '../components/Time'

function Online() {
  return (
    <div>
    <GameHeader/>

     <ChessOnline/>
     
    
     </div>
  )
}

export default Online
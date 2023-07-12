import { useState } from 'react';
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import GameHeader from '../components/GameHeader'

function ComputerGame() {
  const [game, setGame] = useState(new Chess());


  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g }
      modify(update)
      return update;
    })
  }

  function makeRandomMove() {
    const possibleMove = game.moves();



    if (game.game_over() || game.in_draw() || possibleMove.length === 0) return;


    const randomIndex = Math.floor(Math.random() * possibleMove.length);

    safeGameMutate((game) => {
      game.move(possibleMove[randomIndex]);
    })
  }



  function onDrop(source, target) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q'
      })
    })

    if (move == null) return false

    setTimeout(makeRandomMove, 200);
    return true;
  }
  return (
    <div>
      <GameHeader />
      <div className="flex items-center justify-center h-screen">
        <div className="w-[700px] ml-14 mb-20">
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            boardWidth={600}
             
              customBoardStyle={{
                borderRadius: '4px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
              customDarkSquareStyle={{ backgroundColor: '#779952' }}
              customLightSquareStyle={{ backgroundColor: '#edeed1' }}
          />
        </div>
        <button
						className="w-42 px-6 btn bi-brightness-high-fill"
							onClick={() => {
								safeGameMutate((game) => {
									game.reset();
								});
							}}
						>
							reset
						</button>
						<button
						className="w-42 px-6 btn bi-brightness-high-fill"
							onClick={() => {
								safeGameMutate((game) => {
									game.undo();
								});
							}}
						>
							undo
						</button>
      </div>
      
    </div>
  );
}

export default ComputerGame;
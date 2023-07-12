import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import axios from "axios";

const socket = io.connect("http://localhost:3001");

function ChessOnline() {
  const [room, setRoom] = useState("");
  const [game, setGame] = useState(null);
  const [gameURL, setGameURL] = useState(null);
  const [bside, setBSide] = useState(null);
  const [username, setUsername] = useState(null);
  const [result, setResult] = useState(null);
  const user = window.localStorage.getItem("name");

  useEffect(() => {
    
    const addUserScore = async () => {
      try {
        const response = await axios.post("http://localhost:8081/add-user-score", {
          username: user
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    addUserScore(); 

    socket.on("move", ({ sourceSquare, targetSquare }) => {
      safeGameMutate((game) => {
        game.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q',
        });
      });
    });

    socket.on("gameCreated", (url) => {
      setGameURL(url);
    });

    return () => {
      
      socket.off("move");
      socket.off("gameCreated");
    };
  }, []);

  function joinGame() {
    socket.emit("chat", {
      sender: user,
    });
  }

  socket.on("chat", (data) => {
    setUsername("Opponent username: " + data.sender);
  });

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  const joinRoom = () => {
    const gameId = gameURL.split("/").pop();
    if (gameId !== "") {
      socket.emit("join_room", gameId);
      setGame(new Chess());
    }
  };

  function onDrop(sourceSquare, targetSquare) {
    if (!game) return false;

    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
    });

    if (move === null) return false;

    if (game.in_checkmate() === true) {
      const winnerColor = game.turn() === 'b' ? 'white' : 'black';
      const loserColor = game.turn() === 'b' ? 'black' : 'white';

      setResult(`${winnerColor} win!`);

      axios.post("http://localhost:8081/update-score", {
        winnerColor,
        loserColor,
        draw: false,
        username: user,
      });
    }

    if (game.in_draw() === true) {
      setResult("Draw!");

      axios.post("http://localhost:8081/update-score", {
        draw: true,
        username: user,
      });
    }

    socket.emit("move", { sourceSquare, targetSquare });
    return true;
  }

  function createGame(side) {
    socket.emit("createGame", side);
    setRoom(gameURL);
    setGame(new Chess());
  }

  function handleResult() {
    if (result === "White win!" || result === "Black win!") {
      if (user === game.turn()) return "You lose!";
      else return "You win!";
    } else if (result === "Draw!") {
      return "You're in draw!";
    }
    return null;
  }

  return (
    <div>
      <div className="flex justify-center">
        {gameURL && <p className="text-white ">Game URL: {gameURL}</p>}
      </div>
      <div className="ml-[475px] mt-5 flex justify-end items-baseline">
        {!game ? (
          <div>
            <div className="flex justify-center">
              <div className="w-[990px] flex flex-row">
                <div className=" rounded-lg bg-[#44403c] shadow p-14">
                  <label htmlFor="sideSelection" className="label ml-20 mb-10 font-bold text-lg">
                    Join Or Create Game
                  </label>

                  <button id="submitBtn" className="btn btn-enabled text-base-content w-40 h-40 rounded-md" onClick={() => {
                    setBSide("white");
                    createGame("white");
                    joinGame();
                  }}>
                    Create as White
                  </button>

                  <button id="submitBtn" className="btn btn-enabled text-base-content w-40 h-40 rounded-md"
                    onClick={() => {
                      setBSide("black");
                      createGame("black");
                      joinGame();
                    }}>Create as Black</button>
                  <form className="input-group">
                    <input
                      type="text"
                      placeholder="Invite link"
                      className="input input-bordered"
                      onChange={(event) => {
                        setGameURL(event.target.value);
                      }}
                      name="joinGameCode"
                      id="joinGameCode"
                    />
                    <button onClick={joinRoom} className="btn btn-enabled text-base-content" type="submit">
                      Join Room
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={600}
              boardOrientation={bside}
              customBoardStyle={{
                borderRadius: '4px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
              customDarkSquareStyle={{ backgroundColor: '#779952' }}
              customLightSquareStyle={{ backgroundColor: '#edeed1' }}
            />
            <div>
              <div>
                <p className="mr-[300px] mb-10 font-bold text-lg">
                  you: @{user}
                </p>
              </div>
              <div>
                <p className="mr-[300px] mb-10 font-bold text-lg">
                  yourside: {bside}
                </p>
              </div>
              <div>
                <p className="label mr-[300px] mb-10 font-bold text-lg">
                  {username}
                </p>
              </div>
              <div>
                <p className="label mr-[300px] mb-10 font-bold text-lg">
                  {result}
                  {handleResult()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ChessOnline;

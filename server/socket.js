const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const games = {};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("chat", (data) => {
    socket.emit("chat", data);
    socket.broadcast.emit("chat", data);
    console.log(data);
  });

  socket.on("createGame", (side) => {
    const gameId = generateGameId();
    const gameURL = `http://localhost:3000/game/${gameId}`;
    games[gameId] = {
      white: side === "white" ? socket.id : null,
      black: side === "black" ? socket.id : null,
    };
    socket.emit("gameCreated", gameURL);
    console.log(gameURL);
  });

  socket.on("joinGame", (gameId, side) => {
    const game = games[gameId];
    if (game && !game[side] && !game[getOppositeSide(side)]) {
      game[side] = socket.id;
      const gameURL = `http://localhost:3000/game/${gameId}`;
      io.to(game[getOppositeSide(side)]).emit("opponentJoined", gameURL);
    }
  });

  socket.on("join_room", (data) => {
    socket.join(data);
  });
  
  socket.on("move", ({ sourceSquare, targetSquare }) => {
    
    socket.broadcast.emit("move", { sourceSquare, targetSquare });
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
    removePlayerFromGames(socket.id);
  });
});

function generateGameId() {
  return Math.random().toString(36).substring(2, 8);
}

function getOppositeSide(side) {
  return side === "white" ? "black" : "white";
}

function removePlayerFromGames(playerId) {
  for (const gameId in games) {
    const game = games[gameId];
    if (game.white === playerId || game.black === playerId) {
      delete games[gameId];
      break;
    }
  }
}


server.listen(3001, () => {
  console.log("Server is running 3001");
});


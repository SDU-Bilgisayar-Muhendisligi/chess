import '../../App.css'
import React, { useState } from 'react';
import { IconBrush, IconRotate } from "@tabler/icons-react";
import { Chessboard } from 'react-chessboard';
import { Chess, WHITE } from 'chess.js';

const styles = {
	container: {
		width: '600px',
		margin: 'auto',
		position: 'relative'
	},
	buttonContainer: {
		position: 'absolute',
		top: '100px',
		bottom: '8px',
		right: '300px'

	}
};

const ChessOff = () => {
	const [animate, setAnimate] = useState(false);
	const [Color, setColor] = useState(0);
	const [darkcolor, setDarkcolor] = useState("#779952");
	const [lightcolor, setlightcolor] = useState("#edeed1");
	const [boardOrientation, setBoardOrientation] = useState(false);
	const [game, setGame] = useState(new Chess());


	function safeGameMutate(modify) {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	}


	function onDrop(sourceSquare, targetSquare) {
		let move = null;
		safeGameMutate((game) => {
			move = game.move({
				from: sourceSquare,
				to: targetSquare,
				promotion: 'q',
			});
		}

		);
		console.log(game.fen());

		if (move === null) return false;



		if (game.in_checkmate()) {
			console.log('in checkmate');
		}

		return true;
	}

	const boardAnimate = () => {
		setAnimate(!animate);
	};

	const bOrientation = () => {
		setBoardOrientation(!boardOrientation);
	};
	const colorButton = () => {
		if (Color === 0) {
			setDarkcolor('#779952');
			setlightcolor('#edeed1');
			setColor(1);
		} else if (Color === 1) {
			setDarkcolor('#0099ff');
			setlightcolor('#edeed1');
			setColor(2);
		} else if (Color === 2) {
			setDarkcolor('#73264d');
			setlightcolor('#edeed1');
			setColor(0);
		}
	};


	return (
		<div style={styles.container}>
			<div id="board" className={animate ? 'animate' : ''}>
				<div className="app">
					<Chessboard
						position={game.fen()}
						onPieceDrop={onDrop}
						boardOrientation={boardOrientation ? 'black' : 'white'}
						customBoardStyle={{
							borderRadius: '4px',
							boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
						}}
						customDarkSquareStyle={{ backgroundColor: darkcolor }}
						customLightSquareStyle={{ backgroundColor: lightcolor }}
					/>
				</div>
			</div>
			<div className="mt-[-150px] mr-[-550px] flex justify-end relative">
				<div style={styles.buttonContainer}>
					<div>
						<button
							className="w-42 px-6 btn bi-brightness-high-fill"
							onClick={boardAnimate && bOrientation}
						>
							<IconRotate className="swap-off m-auto block h-full" />
						</button>
						<button
							className="w-42 px-6 btn bi-brightness-high-fill"
							onClick={colorButton}
						>
							<IconBrush className="swap-off m-auto block h-full" />
						</button>
						
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
		</div>
	);
};

export default ChessOff;

import '../../App.css'
import React, { useState } from 'react';
import { IconRotate } from "@tabler/icons-react";

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

function Chess() {
  const [animate, setAnimate] = useState(false);

  const boardAnimate = () => {
    setAnimate(!animate);
  };

  return (
    <div>
      <div id="endscene">
        <p className="winning-sign">white wins</p>
        <div className="overlay"></div>
      </div>

      <br />
      <div style={styles.container}>
        <div id="board" className={animate ? 'animate' : ''}>
          <div id="final" className="odd">
            <div id="81" className="square" data-square="8-a">
              <img className="piece rook" id="blackRook1" src="img/blackRook.png" />
            </div>
			<div id="82" className="square" data-square="8-b">
				<img className="piece knight" id="blackKnight1" src="img/blackKnight.png"/>
			</div>
			<div id="83" className="square" data-square="8-c">
				<img className="piece bishop" id="blackBishop1" data-color="black" src="img/blackBishop.png"/>
			</div>
			<div id="84" className="square" data-square="8-d">
				<img className="piece bking" id="blackQueen" data-color="black" src="img/blackQueen.png"/>
			</div>
			<div id="85" className="square" data-square="8-e">
				<img className="piece bking" id="blackKing" data-color="black" src="img/blackKing.png"/>
			</div>
			<div id="86" className="square" data-square="8-f">
				<img className="piece bishop" id="blackBishop2" data-color="black" src="img/blackBishop.png"/>
			</div>
			<div id="87" className="square" data-square="8-g">
				<img className="piece bking" id="blackKnight2" data-color="black" src="img/blackKnight.png"/>
			</div>
			<div id="88" className="square" data-square="8-h">
				<img className="piece rook" id="blackRook2" src="img/blackRook.png"/>
			</div>
		</div>
		<div className="even">
			<div id="71" className="square" data-square="7-a">
				<img className="piece pawn" id="blackPawn1" src="img/blackPawn.png"/>
			</div>
			<div id="72" className="square" data-square="7-b">
				<img className="piece pawn" id="blackPawn2" src="img/blackPawn.png"/>
			</div>
			<div id="73" className="square" data-square="7-c">
				<img className="piece pawn" id="blackPawn3" src="img/blackPawn.png"/>
			</div>
			<div id="74" className="square" data-square="7-d">
				<img className="piece pawn" id="blackPawn4" src="img/blackPawn.png"/>
			</div>
			<div id="75" className="square" data-square="7-e">
				<img className="piece pawn" id="blackPawn5" src="img/blackPawn.png"/>
			</div>
			<div id="76" className="square" data-square="7-f">
				<img className="piece pawn" id="blackPawn6" src="img/blackPawn.png"/>
			</div>
			<div id="77" className="square" data-square="7-g">
				<img className="piece pawn" id="blackPawn7" src="img/blackPawn.png"/>
			</div>
			<div id="78" className="square" data-square="7-h">
				<img className="piece pawn" id="blackPawn8" src="img/blackPawn.png"/>
			</div>
          </div>
		  <div className="odd">
			<div id="61" className="square" data-square="6-a"></div>
			<div id="62" className="square" data-square="6-b"></div>
			<div id="63" className="square" data-square="6-c"></div>
			<div id="64" className="square" data-square="6-d"></div>
			<div id="65" className="square" data-square="6-e"></div>
			<div id="66" className="square" data-square="6-f"></div>
			<div id="67" className="square" data-square="6-g"></div>
			<div id="68" className="square" data-square="6-h"></div>
		</div>
		<div className="even">
			<div id="51" className="square" data-square="5-a"></div>
			<div id="52" className="square" data-square="5-b"></div>
			<div id="53" className="square" data-square="5-c"></div>
			<div id="54" className="square" data-square="5-d"></div>
			<div id="55" className="square" data-square="5-e"></div>
			<div id="56" className="square" data-square="5-f"></div>
			<div id="57" className="square" data-square="5-g"></div>
			<div id="58" className="square" data-square="5-h"></div>
		</div>
		<div className="odd">
			<div id="41" className="square" data-square="4-a"></div>
			<div id="42" className="square" data-square="4-b"></div>
			<div id="43" className="square" data-square="4-c"></div>
			<div id="44" className="square" data-square="4-d"></div>
			<div id="45" className="square" data-square="4-e"></div>
			<div id="46" className="square" data-square="4-f"></div>
			<div id="47" className="square" data-square="4-g"></div>
			<div id="48" className="square" data-square="4-h"></div>
		</div>
		<div className="even">
			<div id="31" className="square" data-square="3-a"></div>
			<div id="32" className="square" data-square="3-b"></div>
			<div id="33" className="square" data-square="3-c"></div>
			<div id="34" className="square" data-square="3-d"></div>
			<div id="35" className="square" data-square="3-e"></div>
			<div id="36" className="square" data-square="3-f"></div>
			<div id="37" className="square" data-square="3-g"></div>
			<div id="38" className="square" data-square="3-h"></div>
		</div>
		<div className="odd">
			<div className="square white" id="21" data-square="2-a">
				<img className="piece pawn" id="whitePawn1" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="22" data-square="2-b">
				<img className="piece pawn" id="whitePawn2" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="23" data-square="2-c">
				<img className="piece pawn" id="whitePawn3" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="24" data-square="2-d">
				<img className="piece pawn" id="whitePawn4" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="25" data-square="2-e">
				<img className="piece pawn" id="whitePawn5" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="26" data-square="2-f">
				<img className="piece pawn" id="whitePawn6" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="27" data-square="2-g">
				<img className="piece pawn" id="whitePawn7" src="img/whitePawn.png"/>
			</div>
			<div className="square white" id="28" data-square="2-h">
				<img className="piece pawn" id="whitePawn8" src="img/whitePawn.png"/>
			</div>
		</div>
		<div className="even">
			<div id="11" className="square white" data-square="1-a">
				<img className="piece rook" id="whiteRook1" src="img/whiteRook.png"/>
			</div>
			<div id="12" className="square white" data-square="1-b">
				<img className="piece knight" id="whiteKnight1" src="img/whiteKnight.png"/>
			</div>
			<div id="13" className="square white" data-square="1-c">
				<img className="piece bishop" id="whiteBishop1" data-color="white" src="img/whiteBishop.png"/>
			</div>
			<div id="14" className="square white" data-square="1-d">
				<img className="piece queen" id="whiteQueen" src="img/whiteQueen.png"/>
			</div>
			<div id="15" className="square white" data-square="1-e">
				<img className="piece wking" src="img/whiteKing.png" id="whiteKing"/>
			</div>
			<div id="16" className="square white" data-square="1-f">
				<img className="piece knight" id="whiteBishop2" src="img/whiteBishop.png"/>
			</div>
			<div id="17" className="square white" data-square="1-g">
				<img className="piece knight" id="whiteKnight2" src="img/whiteKnight.png"/>
			</div>
			<div id="18" className="square white" data-square="1-h">
				<img className="piece rook" id="whiteRook2" src="img/whiteRook.png"/>
			</div>
			</div>
	
        </div>

        <div id="sematary">
          <div id="whiteSematary">
            <div className="pawn"></div>
            <div className="knight"></div>
            <div className="bishop"></div>
            <div className="rook"></div>
            <div className="queen"></div>
          </div>
          <div id="blackSematary">
            <div className="pawn"></div>
            <div className="knight"></div>
            <div className="bishop"></div>
            <div className="rook"></div>
            <div className="queen"></div>
          </div>
        </div>
      </div>

      <p id="turn"></p>
      <div style={styles.buttonContainer}>
        <button className="w-42 px-6 btn bi-brightness-high-fill " onClick={boardAnimate}>
		<IconRotate className="swap-off m-auto block h-full" />
		</button>
      </div>
    </div>
  );
}

export default Chess;

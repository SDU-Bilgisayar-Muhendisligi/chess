import React from 'react';
import aImg from '../img/board.png';
import Playbutton from './Playbutton';

const HomeChessBoard = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
    <div className="flex justify-center">
    <div className="flex flex-row">
      <div className="w-[800px] rounded-lg shadow p-6 pl-24">
        <div className="mb-4 w-[500px]">
          <img src={aImg} alt="A" className="mx-auto " />
        </div>
        {/* */}
      </div>
      <div className="container mx-auto mt-8 pl-8">
        <Playbutton />
      </div>
    </div>
  </div>
  </div>
  );
};

export default HomeChessBoard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Playbutton = () => {
  const navigate = useNavigate();

  const handlePlayOnline = () => {
    navigate('/online');
  };

  const handlePlayOffline = () => {
    navigate('/offline');
  };

  const handlePlayComputer = () => {
    navigate('/ComputerGame');
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-success font-bold mb-4">Play Chess Online</h1>
      <h2 className="text-2xl text-success font-bold mb-16">Play Chess Online</h2>
      <div className="text-bg-a mb-16">
        <span className="text-success  font-bold text-1xl">8,571,479</span>
        <span className="text-1xl"> Games Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="text-success  font-bold text-1xl">451,232</span>
        <span className="text-1xl"> Playing Now</span>
      </div>

      <button className="w-72 py-5 px-6 bg-[#7FA650] text-white font-bold mb-8 hover:bg-[#96c75a] transition-colors duration-300 rounded shadow-2xl" onClick={handlePlayOnline}>
        Play Online
      </button>


      <button
        className="w-72 py-5 px-6 bg-gray-600 text-white font-bold hover:bg-gray-500 transition-colors duration-300 rounded shadow-xl"
        onClick={handlePlayOffline}
      >
        Play Offline
      </button>
      <button
        className="w-72 py-5 px-6 mt-8 bg-gray-400 text-white font-bold hover:bg-gray-500 transition-colors duration-300 rounded shadow-xl"
        onClick={handlePlayComputer}
      >
        Play Computer
      </button>
    </div>
  );
}

export default Playbutton;


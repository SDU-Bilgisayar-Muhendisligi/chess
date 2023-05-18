import React from 'react'
import { Link } from "react-router-dom";
import puzzleImg from '../img/board-puzzles.png';
import nakamuraImg from '../img/hikaru-nakamura.jpg';
import lessonImg from '../img/board-lessons.png';
import aImg from '../img/anna-rudolf.jpg';
import r1 from '../img/r1.png';
import r2 from '../img/r2.png';
import r3 from '../img/r3.png';
import r4 from '../img/r4.png';

const Body = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className="flex bg-neutral" style={{ width: "70%", height: "520px" }}>
                    <div className="w-1/2">
                        <p className="text-4xl text-white font-bold pb-10 pt-16 flex justify-center">Solve Chess Puzzles</p>
                        <div className="flex justify-center pb-10">
                            <button className="w-72 py-5 px-6 bg-[#7FA650] text-white font-bold mb-8 hover:bg-[#96c75a] transition-colors duration-300 rounded shadow-2xl" onClick={null}>
                                Solve Puzzles
                            </button>
                        </div>
                        <div className="flex justify-center mt-3 pl-14">
                            <img src={nakamuraImg} alt="Resim" className="mr-2 rounded shadow-2xl pr-8" />
                            <div className="w-1/2">
                                <p>"Kalıpları tanımayı geliştirmek için en iyi yol bulmacalardır ve bulmacalar için daha iyi bir site yok."</p>
                                <div className="flex justify-start pt-8">
                                    <p className="w-6 h-5 flex justify-center mr-2 bg-[#861414] rounded text-[12px] font-bold">GM</p>
                                    <p className="flex justify-center">Hikaru Nakamura</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-2/5 pt-16 pl-9">
                        <img src={puzzleImg} alt="Resim" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[-65px] ">
                <div className="flex bg-neutral pl-8" style={{ width: "70%", height: "520px" }}>

                    <div className="w-2/5 pt-16 pl-9">
                        <img src={lessonImg} alt="Resim" />
                    </div>
                    <div className="w-1/2">
                        <p className="text-4xl text-white font-bold pb-10 pt-16 flex justify-center pl-20">Solve Chess Puzzles</p>
                        <div className="flex justify-center pb-10 pl-20">
                            <button className="w-72 py-5 px-6 bg-[#7FA650] text-white font-bold mb-8 hover:bg-[#96c75a] transition-colors duration-300 rounded shadow-2xl" onClick={null}>
                                Solve Puzzles
                            </button>
                        </div>
                        <div className="flex justify-center mt-3 pl-14">
                            <img src={aImg} alt="Resim" className="mr-2 rounded shadow-2xl pr-8" />
                            <div className="w-1/2">
                                <p>"Kalıpları tanımayı geliştirmek için en iyi yol bulmacalardır ve bulmacalar için daha iyi bir site yok."</p>
                                <div className="flex justify-start pt-8">
                                    <p className="w-6 h-5 flex justify-center mr-2 bg-[#861414] rounded text-[12px] font-bold">GM</p>
                                    <p className="flex justify-center">Hikaru Nakamura</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div>
                <p className="text-4xl text-white font-bold pb-10 pt-16 flex justify-center mt-[-28px]">Follow what’s happening in Chess Today.</p>
            </div>


            <div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center">
                        <div className="m-4">
                            <Link to="/home">
                                <img src={r1} alt="Resim 1" />
                            </Link>
                            <p className="text-2xl font-bold pt-4 flex justify-center">Solve Chess Puzzles</p>
                            <p className="text-1xl flex justify-center">Solve Chess Puzzles</p>
                        </div>
                        <div className="m-4">
                            <Link to="/home">
                                <img src={r2} alt="Resim 2" />
                            </Link>
                            <p className="text-2xl font-bold pt-4 flex justify-center">Solve Chess Puzzles</p>
                            <p className="text-1xl flex justify-center">Solve Chess Puzzles</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="m-4">
                            <Link to="/home">
                                <img src={r3} alt="Resim 3" />
                            </Link>
                            <p className="text-2xl font-bold pt-4 flex justify-center">Solve Chess Puzzles</p>
                            <p className="text-1xl flex justify-center">Solve Chess Puzzles</p>
                        </div>
                        <div className="m-4">
                            <Link to="/home">
                                <img src={r4} alt="Resim 4" />
                            </Link>
                            <p className="text-2xl font-bold pt-4 flex justify-center">Solve Chess Puzzles</p>
                            <p className="text-1xl flex justify-center">Solve Chess Puzzles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <button className="w-52 py-5 px-6 bg-[#7FA650] text-white font-bold mb-8 hover:bg-[#96c75a] transition-colors duration-300 rounded shadow-2xl" onClick={null}>
                    Solve Puzzles
                </button>
            </div>

        </div>
    );
};

export default Body;
import { IconUser } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
    const navigate = useNavigate();

    const iconUserBtn = () => {
        navigate('/Settings');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (


        <header className="navbar border-base-300 dark:border-neutral mx-1 w-auto justify-center border-b-2 md:mx-16 lg:mx-40">
            <div className="flex flex-1 items-center gap-2">

                <div className="dropdown dropdown-right hover:dropdown-open">
                    <label tabIndex={0} className="badge badge-sm cursor-help">
                        CHESS
                    </label>
                    <div
                        tabIndex={0}
                        className="dropdown-content card card-compact bg-primary text-primary-content w-64 shadow"
                    >
                        <div className="card-body cursor-default">
                            <p className="text-left text-xs">
                                projenin geliştirme linki{" "}
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    Tıkla!
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <ThemeToggle />
                <div className="relative inline-block ">
                    <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <button className="m-auto block h-full" onClick={toggleDropdown}>
                                <IconUser />
                            </button>
                        </div>

                        {isOpen && (
                            <ul className="p-16 bg-neutral rounded shadow">
                                <div className="flex flex-col">
                                    <li className="mb-4">
                                        <Link to="/PlayerPage" className=" text-gray-300 hover:text-[#96c75a]">
                                            Player_Page
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/Settings" className="text-gray-300 hover:text-[#96c75a]">
                                            Player_Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/logout" className="text-gray-300 hover:text-[#96c75a] ">
                                            logout
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        )}
                    </div>

                </div>



            </div>
        </header>





    );
}

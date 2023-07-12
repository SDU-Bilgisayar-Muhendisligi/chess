import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from 'react-router-dom';
import { IconUser } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import axios from 'axios';

function Header() {
  const { user, isLoggedIn, handleLogout } = useContext(UserContext);
  const [username, setUsername] = useState("username");
  const navigate = useNavigate();
  const is_LoggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(user.isLoggedIn);

  console.log("local store", window.localStorage.getItem("name"))
  const name = window.localStorage.getItem("name");
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/user-json', {
          params: {
            email: window.localStorage.getItem("email")
          }
        });
        const data = response.data;
        setPlayerData(data);
        console.log("username", data.name);
        window.localStorage.setItem("name", data.name);
      } catch (error) {
        console.error('Oyuncu verilerini alma hatası:', error);
      }
    };

    fetchPlayerData();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("isLoggedIn"); 
    navigate('/');
  };

  const iconUserBtn = () => {
    navigate('/Settings');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
          <div className="relative inline-block">
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
                      <Link onClick={logout} className="text-gray-300 hover:text-[#96c75a] ">
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
      <header className="py-4">
        <div className="container mx-auto flex justify-end items-center pr-44">
          {is_LoggedIn ? (
            <div>
              <p className="text-success font-bold text-xl bg-gradient-to-r">
                Welcome, @{name}!
              </p>
              <button
                onClick={logout}
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <div>
                <Link
                  to="/register"
                  className="mr-4 bg-[#7FA650] hover:bg-[#96c75a] text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                >
                  Log In
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;


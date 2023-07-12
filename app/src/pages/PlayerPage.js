import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PlayerPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [playerData, setPlayerData] = useState(null);
  const [userScore, setUserScore] = useState('Yakında');

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/current-user?email=${window.localStorage.getItem('email')}`);
        const data = response.data;
        setPlayerData(data);
        console.log('username', data.name);
        setUsername(data.name);
        window.localStorage.setItem('name', data.name);

        const scoreResponse = await axios.get(`http://localhost:8081/user-score/${username}`);
        const scoreData = scoreResponse.data;
        if (scoreData) {
          setUserScore(scoreData.user_score);
        } else {
          await axios.post('http://localhost:8081/add-user-score', {
            username,
            user_score: 0,
          });
          setUserScore(0);
        }
      } catch (error) {
        console.error('Oyuncu verilerini alma hatası:', error);
      }
    };

    fetchPlayerData();
  }, [username]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-lg w-full bg-neutral p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl pl-36 font-bold mb-4">Player Details</h2>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Id</div>
          <div className="text-blue-600 hover:text-blue-300">{playerData.id}</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">UserName</div>
          <div className="text-blue-600 hover:text-blue-300">{playerData.name}</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Email</div>
          <div className="text-blue-600 hover:text-blue-300">{playerData.email}</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Level</div>
          <div className="text-blue-600 hover:text-blue-300">{playerData.level}</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Created at</div>
          <div className="text-blue-600 hover:text-blue-300">{playerData.registration_date}</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Score</div>
          <div className="text-blue-600 hover:text-blue-300">{userScore}</div>
        </div>
        <button
          className="bg-[#7FA650] hover:bg-[#95d447] text-white px-4 py-2 rounded"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PlayerPage;

import { useNavigate } from 'react-router-dom';

const PlayerPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-lg w-full bg-neutral p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl pl-36 font-bold mb-4">Player Details</h2>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">UserName </div>
          <div className="text-blue-600">Player001</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Level </div>
          <div className="text-blue-600">Beginner</div>
        </div>
        <div className="mb-4 pl-44">
          <div className="text-lg font-semibold">Score </div>
          <div className="text-blue-600">1500</div>
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

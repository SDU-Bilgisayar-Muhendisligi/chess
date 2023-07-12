import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideSelectionForm = () => {
  const navigate = useNavigate();

  const [selectedSide, setSelectedSide] = useState('');

  const handleSideChange = (event) => {
    setSelectedSide(event.target.value);
  };

  const handleCreateButtonClick = () => {
    navigate('/online');
    console.log(`Selected side: ${selectedSide}`);

  };

  return (
    <div className="flex justify-center">
    <div className="w-[400px] flex flex-row">
      <div className=" rounded-lg bg-[#44403c] shadow p-14">
      <label htmlFor="sideSelection" className="label mt-1">
          Join:
        </label>
        <form className="input-group">
          <input
            type="text"
            placeholder="Invite link"
            className="input input-bordered"
            name="joinGameCode"
            id="joinGameCode"
          />
          <button className="btn btn-enabled text-base-content" type="submit">
            Join
          </button>
        </form>
        <label htmlFor="sideSelection" className="label mt-5">
        <h1>or create</h1>
        </label>
        
        <label htmlFor="sideSelection" className="label mt-4">
          Select Your Side:
        </label>
        <select
          id="sideSelection"
          name="sideSelection"
          value={selectedSide}
          onChange={handleSideChange}
          className="input input-bordered"
        >
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <button
          type="button"
          onClick={handleCreateButtonClick}
          className="btn mt-4"
        >
          Create
        </button>
      </div>
    </div>
  </div>
  );
}

export default SideSelectionForm;

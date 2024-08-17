// src/components/Hero.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/dataSlice";
import Modal from "./Modal";

const Hero = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.data.searchTerm);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <header className="bg-violet-100 text-center py-8 flex flex-col items-center justify-center h-[48vh]">
      <h1 className="text-5xl font-semibold mb-8 mt-8">
        How can we help?
      </h1>
      <div className="w-full max-w-xs md:max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <Modal />
    </header>
  );
};

export default Hero;

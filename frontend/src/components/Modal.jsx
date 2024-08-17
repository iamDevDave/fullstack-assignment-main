// src/components/Modal.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/dataSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { matchingCards, showModal } = useSelector((state) => state.data);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto relative">
        <button
          className="absolute top-2 right-2 text-zinc-950 hover:text-zinc-950"
          onClick={() => dispatch(closeModal())}
        >
          &times;
        </button>
        {matchingCards.length > 0 ? (
          <div>
            {matchingCards.map((card) => (
              <div key={card.id} className="mb-4 p-4 border rounded">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </div>
  );
};

export default Modal;

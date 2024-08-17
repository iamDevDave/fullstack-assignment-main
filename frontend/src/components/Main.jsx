// src/components/Main.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/dataSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded">
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;

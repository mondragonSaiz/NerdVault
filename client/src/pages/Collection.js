import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_FIGURES, QUERY_ME } from '../utils/queries';
import { ADD_FIGURE } from '../utils/mutations';

export default function Collection() {
  const [isDisabledArray, setIsDisabledArray] = useState([]);
  const { loading, data } = useQuery(GET_FIGURES);
  const { loading: userLoading, data: userData } = useQuery(QUERY_ME);
  const [addFigure, { error: addFigureError, data: addFigureData }] =
    useMutation(ADD_FIGURE);

  const figures = data?.figures;
  const user = userData?.me;

  useEffect(() => {
    if (user) {
      const getAllItemsFromLocalStorage = () => {
        try {
          const keys = Object.keys(localStorage);
          const items = keys.map((key) => {
            const value = localStorage.getItem(key);
            return { key, value };
          });

          const initialDisabledArray = figures.map((figure) => {
            const matchingItem = items.find(
              (item) => item.key === `${figure._id}-${user._id}`
            );
            return !!matchingItem; // Convert to boolean
          });

          setIsDisabledArray(initialDisabledArray);
        } catch (error) {
          console.error('Error retrieving items from local storage:', error);
          return [];
        }
      };

      getAllItemsFromLocalStorage();
    }
  }, [figures, user]);

  const handleFigureClick = async ({ _id }, index) => {
    try {
      console.log('figure ID to add!', _id);

      const { data } = addFigure({ variables: { figureId: _id } });
      localStorage.setItem(`${_id}-${user._id}`, _id);

      // Update the disabled state of the clicked button
      const updatedDisabledArray = [...isDisabledArray];
      updatedDisabledArray[index] = true;
      setIsDisabledArray(updatedDisabledArray);

      console.log('SUCCESFULLY ADDED FIGURE', data);
      window.location.reload();
    } catch (err) {
      console.log('ERROR WHILE ADDING FIG', err);
    }
  };

  if (loading || userLoading) {
    return <div>Loading...</div>;
  }
  if (!Auth.loggedIn()) return <Navigate to="/" />;

  return (
    <div>
      <main className="bg-neutral-950  to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-3">
          <Navbar />
          <select
            className="bg-slate-900 text-white rounded-lg border py-1 px-2 mt-3 mb-3"
            defaultValue
          >
            <option>All</option>
            <option>Dragon Ball</option>
            <option>Dragon Ball Z</option>
            <option>Dragon Ball Super</option>
            <option>Dragon Ball GT</option>
          </select>
          <div className="flex flex-row max-w-[900px]  max-h-[800px] m-auto overflow-auto pt-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {figures.map((figure, index) => (
                <div
                  key={figure.name}
                  className="bg-teal-950 rounded xl shadow-lg  m-4"
                >
                  <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                      <img src={figure.image} alt={figure.name} />
                    </div>
                    <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                      {figure.name}
                    </h5>
                    <p className="text-slate-500  text-lg mt-3">
                      {figure.saga}
                    </p>
                    <p className="text-slate-500 text-lg mt-3">
                      {figure.releaseType}
                    </p>

                    <p className="text-slate-500 text-lg mt-3">{figure.year}</p>

                    <button
                      onClick={() => handleFigureClick(figure, index)}
                      className={`text-center bg-green-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                        hover:bg-green-400 hover:text-slate-200  focus:scale-95 transition-all
                        duration-100 ease-out ${
                          isDisabledArray[index] ? 'disabled:opacity-75' : ''
                        }`}
                      disabled={isDisabledArray[index]}
                    >
                      Add to Collection
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

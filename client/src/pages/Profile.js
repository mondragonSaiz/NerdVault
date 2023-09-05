import React from 'react';
import Navbar from '../components/Navbar';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('MY DATA', user);
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <div>
      <main className="bg-neutral-950 to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-3">
          <Navbar />

          <h1 className="text-slate-200 font-medium text-2xl">
            {`${user.username}'s Collection`}
          </h1>
          <select
            className="bg-slate-900 text-white rounded-lg border py-1 px-2 mt-3 mb-3"
            defaultValue
          >
            <option>All </option>
            <option>Dragon Ball </option>
            <option>Dragon Ball Z</option>
            <option>Dragon Ball Super</option>
            <option>Dragon Ball GT</option>
          </select>
          <div className="flex flex-row max-w-[900px]  max-h-[800px] m-auto overflow-auto pt-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {' '}
              {user.figures.map((figure) => (
                <div
                  key={figure.name}
                  className="bg-pink-950 rounded xl shadow-lg  m-4"
                >
                  <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                      <img src={figure.image} />
                    </div>
                    <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                      {figure.name}
                    </h5>
                    <p className="text-slate-300 text-lg mt-3">{figure.year}</p>

                    <button
                      // onClick={() => handleFigureClick(figure)}
                      className="text-center bg-red-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-red-400 hover:text-slate-200  focus:scale-95 transition-all
                  duration-100 ease-out"
                    >
                      Remove from collection
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

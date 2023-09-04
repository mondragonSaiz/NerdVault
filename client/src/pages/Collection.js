import React from 'react';
import Navbar from '../components/Navbar';
// import gokushf1 from '../img/collectionImages/goku-shf1.png';
// import vegetashf1 from '../img/collectionImages/vegeta-shf1.png';
// import gokushf2 from '../img/collectionImages/goku-sh2.jpeg';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_FIGURES } from '../utils/queries';
export default function Collection() {
  const url = '../img/collectionImages/goku-shf1.png';
  const { loading, data } = useQuery(GET_FIGURES);

  const figures = data?.figures;

  const handleFigureClick = ({
    name,
    saga,
    year,
    releaseType,
    isEventExclsive,
    image,
  }) => {
    console.log('figure name to add!', name);
    console.log('figure saga to add!', saga);
    console.log('figure year to add!', year);
    console.log('figure type to add!', releaseType);
    console.log('figure exclusive to add!', isEventExclsive);
    console.log('figure image to add!', image);
    // console.log('target', e.target);
    // console.log('Parent', e.target.parentNode);
    // const parent = e.target.parentNode;
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <div>
      <main className="bg-gradient-to-t from-orange-500 to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-3">
          <Navbar />
          {/* <div class="grid grid-cols-4 gap-4 mt-8 ">
            <div className="text-white">
              <div>01</div>
              <div>01</div>
            </div>
            <div className="text-white">02</div>
            <div className="text-white">03</div>
            <div className="text-white">04</div>
          </div> */}
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
              {figures.map((figure) => (
                <div
                  key={figure.name}
                  className="rounded xl shadow-lg bg-slate-900 m-4"
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
                      onClick={() => handleFigureClick(figure)}
                      className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200  focus:scale-95 transition-all
                  duration-100 ease-out"
                    >
                      Add to Collection
                    </button>
                  </div>
                </div>
              ))}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={url} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className="text-slate-300 text-lg mt-3">2012</p>

                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200  focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={vegetashf1} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className="text-slate-300 text-sm mt-3">
                    Release date: 2012
                  </p>

                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
              {/* <div className="rounded xl shadow-lg bg-slate-900 m-4">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img src={gokushf2} />
                  </div>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 text-slate-300">
                    Goku sjj3
                  </h5>
                  <p className=" text-lg mt-3 text-slate-300">2012</p>
                  <button
                    className="text-center bg-blue-300 text-slate-900 py-2 rounded-lg font-semibold mt-4 
                  hover:bg-blue-400 hover:text-slate-200 focus:scale-95 transition-all
                  duration-100 ease-out"
                  >
                    Add to Collection
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

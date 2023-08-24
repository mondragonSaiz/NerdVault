import React from 'react';
import Navbar from '../components/Navbar';
import inboxLogo from '../img/dragonballLogo.svg';
import gokuLogo from '../img/gokuLogo.svg';
import { Link } from 'react-router-dom';
export default function Homepage() {
  return (
    <div>
      <main className="bg-neutral-950 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <div className="flex flex-col mt-10 lg:flex-row lg:justify-evenly">
            <div className="text-slate-200 font-bold text-6xl w-5/6 lg:text-8xl lg:w-3/5">
              <h1 className="font-poppins">
                Empower Your Collection Journey with Every Figure Tracked
              </h1>
            </div>
            <div className="mt-10 lg:w-1/3">
              <p className="text-slate-200 font-normal mt-10 w-auto lg:text-lg font-poppins">
                Turning Collections into Connections:{' '}
                <strong>Your Figures</strong> <strong>Our App</strong>.
              </p>
              <p className="text-slate-200 font-normal mt-2 w-4/6 lg:text-lg lg:w-11/12 font-poppins">
                <strong>NerdVault</strong> your collection - in one place.
              </p>
              <div className="mt-10 flex">
                <Link
                  to="/sign-up"
                  className=" bg-slate-200 text-neutral-950 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-10 md:pb-0 flex flex-row flex-wrap mt-10 justify-center gap-20 lg:flex-nowrap">
            {/* <div className="hover:transition hover:scale-125 transition duration-300 ease-in-out">
              <img
                src={gokuLogo}
                alt="avatar3"
                className="w-64 h-50 lg:w-52 mb-2 sm:w-44"
              />
              <p className=" text-slate-200 font-thin text-center lg:text-sm">
                Your collection <strong className="font-bold">organized</strong>
                .
              </p>
            </div> */}
            <div className="hover:transition hover:scale-125 transition duration-300 ease-in-out">
              <img
                src={inboxLogo}
                alt="avatar3"
                className="w-64 h-50 lg:w-52 mb-2 sm:w-44"
              />
              <p className=" text-slate-200 font-thin text-center lg:text-sm">
                Your collection <strong className="font-bold">organized</strong>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

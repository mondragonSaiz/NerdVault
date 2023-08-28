import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomModal from '../components/CustomModal';
import inboxLogo from '../img/dragonballLogo.svg';
import gokuLogo from '../img/gokuLogo.svg';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <div>
      <main className="bg-neutral-950 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar showLoginModal={() => setShowSignUpModal(true)} />
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
                <button
                  // onClick={() => setShowSignUpModal(true)}
                  className=" bg-slate-200 text-neutral-950 hover:text-orange-500  hover:bg-orange-200 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                >
                  Get Started
                </button>
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
                Your collection{' '}
                <strong className="font-bold ">organized</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <CustomModal
        isVisible={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in and keep collecting!
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label for="email" className=""></label>{' '}
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              ></input>
            </div>
            <div>
              <label for="password" className=""></label>{' '}
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="••••••••"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-700 hover:bg-orange-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
              rounde-lg text-sm px-5 py-2.5 text-center"
            >
              Log in to your account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{' '}
              <a
                href="#"
                className="text-orange-500 hover:underline hover:text-gray-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </CustomModal>
    </div>
  );
}

import React from 'react';
import Logo from '../img/dbLogo.svg';
import Auth from '../utils/auth';

export default function Navbar({ showLoginModal }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="flex justify-between py-2">
      <a href="/main-page">
        <img src={Logo} className="w-32" alt="logo" />
      </a>
      <ul className="flex items-center">
        <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
        {!Auth.loggedIn() ? (
          <li>
            <button
              onClick={() => showLoginModal()}
              className=" text-slate-200 py-2 px-3 rounded-lg font-mediumfont-poppins hover:bg-slate-200 hover:text-gray-900"
            >
              Log In
              {/* {Auth.loggedIn() ? 'Dashboard' : 'Log In'} */}
            </button>
          </li>
        ) : (
          <li>
            <a
              href="#"
              className=" text-slate-200 py-2 px-3 rounded-lg font-mediumfont-poppins hover:bg-orange-200 hover:text-gray-900 max-[420px]:text-sm"
            >
              Collection
            </a>
            <a
              href="#"
              className=" text-slate-200 py-2 px-3 rounded-lg font-mediumfont-poppins hover:bg-blue-200 hover:text-gray-900 max-[420px]:text-sm"
            >
              Profile
            </a>

            <button
              onClick={logout}
              className=" text-slate-200 py-2 px-3 rounded-lg font-mediumfont-poppins hover:bg-red-400 max-[420px]:text-sm"
            >
              Log Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

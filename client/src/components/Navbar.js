import React from 'react';
import Logo from '../img/dbLogo.svg';
// import Auth from '../utils/auth';

export default function Navbar({ showLoginModal }) {
  return (
    <nav className="flex justify-between py-2">
      <a href="/">
        <img src={Logo} className="w-32" alt="logo" />
      </a>
      <ul className="flex items-center">
        <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
        <li>
          <button
            onClick={() => showLoginModal()}
            className=" text-slate-200 py-2 px-3 font-mediumfont-poppins"
          >
            Log In
            {/* {Auth.loggedIn() ? 'Dashboard' : 'Log In'} */}
          </button>
        </li>
      </ul>
    </nav>
  );
}

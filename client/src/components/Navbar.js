import React from 'react';
import Logo from '../img/dbLogo.svg';
// import Auth from '../utils/auth';

export default function Navbar() {
  return (
    <nav className="flex justify-between py-2">
      <a href="/">
        <img src={Logo} width={150} height={150} alt="logo" />
      </a>
      <ul className="flex items-center">
        <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
        <li>
          <a
            href="/log-in"
            className=" text-slate-200 py-2 px-3 font-mediumfont-poppins"
          >
            Log In
            {/* {Auth.loggedIn() ? 'Dashboard' : 'Log In'} */}
          </a>
        </li>
      </ul>
    </nav>
  );
}

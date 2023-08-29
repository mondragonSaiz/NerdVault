import React from 'react';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function MainPage() {
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <div>
      <main className="bg-gradient-to-t from-orange-500 to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <h1>Main Page</h1>
        </section>
      </main>
    </div>
  );
}

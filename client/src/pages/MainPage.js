import React from 'react';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
export default function MainPage() {
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return <div>Main Page</div>;
}

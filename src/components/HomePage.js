// src/components/HomePage.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="insert">Go to Insert Page</Link>
          </li>
          <li>
            <Link to="display">Go to Display Page</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet is where the nested routes will render */}
      <Outlet />
    </div>
  );
}

export default HomePage;

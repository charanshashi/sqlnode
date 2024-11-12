// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InsertPage from './components/InsertPage';
import DisplayPage from './components/DisplayPage';
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
      {
        path : "/",
        element : <HomePage/>,
        children : [
        {
          path: "insert", // relative path, accessible as /insert
          element: <InsertPage />,
        },
        {
          path: "display", // relative path, accessible as /display
          element: <DisplayPage />,
        }
      ]}
    ]}
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Home } from "./Home";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

function App() {
 return (
  <BrowserRouter>
   <Router />
  </BrowserRouter>
 );
}
export default App;

export const Router = () => {
 return useRoutes([
  { path: "", element: <Home /> },
  { path: "*", element: <Navigate to="/" replace /> },
 ]);
};

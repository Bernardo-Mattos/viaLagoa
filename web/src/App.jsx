import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import IndexPage from "./pages/index-page";


export default function App() {
  return (
    <div className="container"> 
      <IndexPage/>
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar.jsx";
import Topbar from "./Topbar.jsx";
import Landing from "./Landing/Landing.jsx";
export default function Header() {
  return (
    <>
      <header className="header">
        <Topbar />
        <Navbar />
        <Landing/>
      </header>
    </>
  );
}

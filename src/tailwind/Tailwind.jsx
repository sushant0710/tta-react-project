import React from "react";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

const Tailwind = () => {
  return (
    <>
      <section className="tailwind p-3">
        <h1 className="text-3xl text-center font-bold">
          Made with Vite + React Tailwind CSS
        </h1>
        <main className="max-w-[1100px] m-auto p-[20px]">
          <Navbar />
          <Main />
          <Footer />
          <Link className="text-right block pt-4 text-blue-400 font-bold" to="/bootstrap">For React Bootstrap click here</Link>
        </main>
      </section>
    </>
  );
};

export default Tailwind;

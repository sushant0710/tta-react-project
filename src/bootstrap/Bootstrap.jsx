import React from 'react'
import Navbar from './navbar/Navbar'
import Main from './main/Main'
import Footer from './footer/Footer'
import { Link } from 'react-router-dom'

function Bootstrap() {
  return (
    <section className="bootstrap p-3">
        <h1 className="text-3xl text-center font-bold">
          Made with Vite + React Bootstrap
        </h1>
        <main className="max-w-[1100px] m-auto p-[20px]">
          <Navbar/>
          <Main/>
          <Footer/>
          <Link className="text-right block pt-4 text-blue-400 font-bold" to="/">For React Tailwind css click here</Link>
        </main>
      </section>
  )
}

export default Bootstrap
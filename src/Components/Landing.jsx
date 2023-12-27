import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Works } from "./Works";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { ContactsCopy } from "./ContactsCopy";
import { Testimonials } from './Testimonials';
import { About } from './About';
import NavBar from "./NavBar";

const Landing = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
            <Route path="/" element={<Testimonials/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contacts" element={<ContactsCopy/>} />
        </Routes>
        </BrowserRouter>
  )
}

export default Landing;
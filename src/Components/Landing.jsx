import { Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Resume } from "./Resume";
import { Works } from "./Works";
import { Contacts } from "./Contacts";
import { Nav } from "./Nav";

export const Landing = ()=> {
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </BrowserRouter>
    )
}
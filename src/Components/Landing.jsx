import { Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./Home";
// import { About } from "./About";
// import { Resume } from "./Resume";
import { Works } from "./Works";
// import { Contacts } from "./Contacts";
// import { Nav } from "./Nav";
import { AboutCopy } from "./AboutCopy";
import { HomeCopy } from "./HomeCopy";
import { ResumeCopy } from "./ResumeCopy";
import { ContactsCopy } from "./ContactsCopy";
import { NavCopy } from "./NavCopy";

export const Landing = ()=> {
    return(
        <BrowserRouter>
        <NavCopy/>
        <Routes>
            <Route path="/" element={<HomeCopy/>} />
            <Route path="/about" element={<AboutCopy/>} />
            <Route path="/resume" element={<ResumeCopy/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contacts" element={<ContactsCopy/>} />
        </Routes>
        </BrowserRouter>
    )
}
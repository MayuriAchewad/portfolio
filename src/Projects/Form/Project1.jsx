import { Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogIn } from "./LogIn";
import { Form } from "./Form";

export const Project1 = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/signup" element={<Form/>} />
        </Routes>
        </BrowserRouter>
    )
}
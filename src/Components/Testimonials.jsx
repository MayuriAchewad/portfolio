import { Grid } from "@mui/material";
import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Resume } from "./Resume";
import { Works } from "./Works";
import { ContactsCopy } from "./ContactsCopy";

export const Testimonials = () => {
    return(
        <Grid container spacing={2}>

            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <Home/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <About/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <Resume/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <Works/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <ContactsCopy/>
            </Grid>
        </Grid>
        
    )
}
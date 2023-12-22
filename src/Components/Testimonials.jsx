import { Grid } from "@mui/material";
import React from "react";
import { HomeCopy } from "./HomeCopy";
import { AboutCopy } from "./AboutCopy";
import { ResumeCopy } from "./ResumeCopy";
import { Works } from "./Works";
import { ContactsCopy } from "./ContactsCopy";

export const Testimonials = () => {
    return(
        <Grid container spacing={2}>

            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <HomeCopy/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <AboutCopy/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <ResumeCopy/>
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
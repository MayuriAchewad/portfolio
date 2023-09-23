import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const Works = () => {
    return(
        <Grid container spacing={2} align="center" sx={{padding:16, bgcolor:"black", color:"white"}}>
            <Grid item xs={12}>
            <h3>
                CHECK OUTS SOME OF MY WORKS.
            </h3>
            </Grid>

            <Grid item xs={3}>
                    <img style={{padding:5, border:"2px solid black"}} src="/projects/1.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/2.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/3.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/4.jpg" height={150} width={250} alt="" />
            </Grid>

            <Grid item xs={3}>
                    <img style={{padding:5, border:"2px solid black"}} src="/projects/1.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/2.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/3.jpg" height={150} width={250} alt="" />
            </Grid>
            
            <Grid item xs={3}>
                <img style={{padding:5, border:"2px solid black"}} src="/projects/4.jpg" height={150} width={250} alt="" />
            </Grid>
            
        </Grid>
    )
}
import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavCopy = () => {
    return(        
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Link to="/home">
                           
                                <h2>HOME</h2>
                          
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/about">
                           
                                <h2>ABOUT</h2>
                          
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/resume">
                           
                                <h2>RESUME</h2>
                          
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="works">
                           
                                <h2>WORKS</h2>
                          
                        </Link>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Link to="contacts">
                           
                                <h2>CONTACTS</h2>
                          
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="form">
                           
                                <h2>Form</h2>
                          
                        </Link>
                    </Grid>
                </Grid>
        
    )
}
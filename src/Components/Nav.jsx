import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return(        
                <Grid container spacing={2} sx={{position:"fixed", bgcolor:"transparent", margin:1}}>
                    <Grid item xs={2}>
                        <Link to="/home">
                            <Button sx={{fontWeight:"bold"}} fullWidth variant="text" color="warning">
                                home
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/about">
                            <Button sx={{fontWeight:"bold"}} fullWidth variant="text" color="warning">
                                about
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/resume">
                            <Button sx={{fontWeight:"bold"}} fullWidth variant="text" color="warning">
                                resume
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="works">
                            <Button sx={{fontWeight:"bold"}} fullWidth variant="text" color="warning">
                                works
                            </Button>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <Link to="contacts">
                            <Button sx={{fontWeight:"bold"}} fullWidth variant="text" color="warning">
                                contacts
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
        
    )
}
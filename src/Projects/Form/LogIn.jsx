import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn=()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return(
        <div className="login">
        <form className="loginpage">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 style={{color:"red"}}>Login</h1>
                </Grid>
    
                <Grid item xs={12}>
                    <TextField value={email} onChange={e=>setEmail(e.target.value)} type="email" fullWidth label="Email"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={pass} onChange={e=>setPass(e.target.value)} type="password" fullWidth label="Enter Password"/>
                </Grid>
 
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>login</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth color="error">Cancel</Button>
                </Grid>
                
                <Grid item xs={5}>
                    <hr />
                </Grid>
                <Grid item xs={2}>
                    OR
                </Grid>
                <Grid item xs={5}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <p>You don't have an account. 
                        <Link to="/signup">
                            <span> Signup Here...</span>
                        </Link>
                    </p>
                </Grid>
            </Grid>
        </form>
        </div>
                    
            
    )
}
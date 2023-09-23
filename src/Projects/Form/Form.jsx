import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { LogIn } from "./LogIn";
import { Link } from "react-router-dom";

export const Form=()=>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");

    return(
        <div className="signup">
        <form className="signuppage">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 style={{color:"red"}}>Sign Up </h1>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={fname} onChange={e=>setFname(e.target.value)} fullWidth label="First Name"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={lname} onChange={e=>setLname(e.target.value)} fullWidth label="Last Name"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={email} onChange={e=>setEmail(e.target.value)} type="email" fullWidth label="Email"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={pass} onChange={e=>setPass(e.target.value)} type="password" fullWidth label="Enter Password"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" fullWidth label="Confirm Password"/>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>SignUp</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth color="error">Cancel</Button>
                </Grid>
                <Grid item xs={5}>
                    <hr/>
                </Grid>
                <Grid item xs={2}>
                    OR
                </Grid>
                <Grid item xs={5}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <p>Already you have an account. 
                        <Link to="/">
                            <span> Login Here...</span>
                        </Link>
                    </p>
                </Grid>
            </Grid>
        </form>
        </div>
                    
            
    )
}
import { Grid, Avatar, Card, CardContent } from "@mui/material";
import React from "react";


export const About = () => {
    return(
        <Grid container spacing={2} sx={{bgcolor:"black", padding:10}}>
            <Grid item xs={4}>
                <Avatar sx={{width:300, height:300}} src="/images/mayuri.jpg"/>
            </Grid>
            <Grid item xs={8}>
                <h2 style={{color:"white"}}>About Me</h2>
                <p style={{color:"grey"}}>
                    Hi there ! I am Mayuri !  You might also know me as Frontend Web Developer. I've been coding for over 2.5 Years now. As of now I'am willing 
                    and excited to work with both startups and large corporations to build & scale their companies. 
                    Along the journey I realised my passion existed in helping and pursue my dreams as upcoming 
                    developers. With this passion, as of now I  have done  some projects  related to HTML5, CSS3, 
                    Javascript and Reactjs, Nodejs, MongoDB, Redux. I will deliver REAL VALUE by 
                    giving my best to the projects and solves the problems that will help me to enter the world of web 
                    development.
                </p>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={2.7}>
                <h2 style={{color:"white"}}>Contact Details</h2>
                <p style={{color:"grey"}}>
                    Mayuri Achewad
                </p>
                <p style={{color:"grey"}}>
                    Nanded, Maharashtra, 431602
                </p>
                <p style={{color:"grey"}}>
                    +91 9699813523
                </p>
                <p style={{color:"grey"}}>
                    Nanded, Maharashtra, 431602
                </p>
            </Grid>
            <Grid item xs={3}>
                
                        <a class="download" href="/assets/Resume.pdf" style={{}}>
                            <span style={{marginRight:10}}><img src="/images/download.gif" alt="" /></span>
                         Download resume
                        </a>
                    
            </Grid>
           
        </Grid>
    )
}
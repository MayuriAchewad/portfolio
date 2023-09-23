import { Avatar, Grid } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export const Home = () => {
    return(
        <Grid container spacing={2} align="center" sx={{bgcolor:"skyblue",  padding:22, height:740}}>
            <Grid item xs={12} className="intro" >
                <h1 data-text="I'm Mayuri Achewad">
                    I'm Mayuri Achewad
                </h1>
            </Grid>
            <Grid item xs={12} sx={{marginTop:"-50px", fontSize:20}}>
                <p className="myself">
                    Live in Nanded, Maharashtra. <span style={{fontWeight:"bold"}}>I am a WEB DEVELOPER.</span>
                </p>
            </Grid>
            <Grid item xs={12}  >
                
                
                
                {/* <LinkedinShareButton className="logo" url="https://www.linkedin.com/in/mayuri-achewad-2b0826259/">
                    <LinkedinIcon size={40} round/>
                </LinkedinShareButton> */}

                <a href="https://twitter.com/MR65882853">
                    <TwitterIcon style={{marginLeft:30, marginTop:"-10px", borderRadius:"100%", fontWeight:"lighter",height:30, width:32, color:"black"}}/>
                </a>              
                
                <a href="https://www.linkedin.com/in/mayuri-achewad-2b0826259/">
                    <LinkedInIcon style={{marginLeft:30, marginTop:"-10px", borderRadius:"100%", fontWeight:"lighter",height:30, width:32, color:"black"}}/>
                </a>
                <a href="http://www.instagram.com/mayuriachewad">
                    <InstagramIcon style={{marginLeft:30, marginTop:"-10px", borderRadius:"100%", fontWeight:"lighter",height:30, width:32, color:"black"}}/>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fmayuri.achewad%2F&ext=1685969857&hash=AeZyxMLvtl4fZjzl30s">
                    <FacebookIcon  style={{marginLeft:30,  marginTop:"-10px", borderRadius:"100%", fontWeight:"lighter",height:30, width:32, color:"black"}} />
                </a>
                <a href="https://github.com/MayuriAchewad">
                    <GitHubIcon  style={{marginLeft:30,  marginTop:"-10px", borderRadius:"100%", fontWeight:"lighter",height:30, width:32, color:"black"}} />
                </a>
                
            
            </Grid>
        </Grid>
    )
}
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const Works = () => {
    const data=[
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg",info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg", info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg", info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg", info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg", info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
        {img:"https://i.ytimg.com/vi/2QIMUBilooc/maxresdefault.jpg", info:"sedtrfghjb esthdfcgvnb tfghvjb", heading:"heading1"},
    ]
    return(
        <Grid container spacing={2} align="center" sx={{padding:10,height:"100vh", bgcolor:"black", color:"white"}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>
                CHECK OUTS SOME OF MY WORKS.
            </h1>
            </Grid>
            {
                data.map((item)=>(

            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <div className="wrapper">
                    <div className="card">
                        <img src={item.img} alt="" />
                        <div className="info">
                        <h1>{item.heading}</h1>
                        <p>{item.info}</p>
                       <br />
                        <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    </div>           
            </Grid>
                ))
            }

            
        
            
           
            
        </Grid>
    )
}
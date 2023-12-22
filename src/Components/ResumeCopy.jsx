import { Card, Grid } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const ResumeCopy = () => {
    return(
        <Card sx={{padding:15, bgcolor:"skyblue",padding:{xs:3, sm:5, md: 7 , lg: 9, xl: 12}}}>
        <Grid container spacing={2}>
            <Grid item  xs={12} sm={12} md={12} lg={4} xl={4}>
                <h3>
                    EDUCATION
                </h3>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={8} xl={8}>
                <p style={{fontSize:20, fontFamily:"cursive"}}>
                Bachelor's Degree, Electrical *December 2020
                </p>

                <p>
                Graduated with Higher Second Class Honours
                </p>
            </Grid>
        </Grid>    
        <hr />
        <Grid container spacing={2}>
            <Grid item  xs={12} sm={12} md={12} lg={4} xl={4}>
                <h3>
                    PROJECTS
                </h3>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={8} xl={8}>
                <h2>Bank Management System</h2>
                <p style={{fontSize:20, fontFamily:"cursive"}}>Using Javascript, React Js, Redux, Material Ui, Node Js, Express, MangoDB</p>
                <p>Bank Management system in a virtualization of transactions in banking system. The banking system are used manual working but when we used online banking system. It is totally virtualization process which avoid manual process and converts it in automatic process.</p>

                <h2>Portfolio Website Design</h2>
                <p style={{fontSize:20, fontFamily:"cursive"}}>Using HTML, CSS, Javascript, React Js, Redux, Material Ui,Mongo DB, Node Js</p>
                <p>After Developing my skills on Web Development I made a Portfolio Website Design which is completely based on Full Stack.</p>
           
                <h2>Commercial Website</h2>
                <p style={{fontSize:20, fontFamily:"cursive"}}>Using HTML, CSS, Javascript, React Js, Redux, Material Ui, Mongo DB</p>
                <p>An e-commerce should aim at providing an immersive and unique experience that makes online shopping a much simpler and seamless process. At the same time, it should include features that drive sales and boost revenues for your business </p>
            </Grid>
        </Grid>       
        <hr />
        <Grid container spacing={2}>
            <Grid item  xs={12} sm={12} md={12} lg={4} xl={4}>
                <h3>SKILLS</h3>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={8} xl={8}>
                <p style={{fontSize:20, fontFamily:"cursive"}}>My Programming Language Proficiency</p>
                <h3>HTML5</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>                
                <h3>CSS3</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>                
                <h3>JAVASCRIPT</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>                
                <h3>REACT JS</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>
                <h3>REDUX</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>                
                <h3>Material UI</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>                
                <h3>MONGO DB</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>
                <h3>Node JS</h3>
                <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color="inherit" value={50} sx={{height:30}} />
    </Box>            </Grid>
        </Grid>

        </Card>
    )
}
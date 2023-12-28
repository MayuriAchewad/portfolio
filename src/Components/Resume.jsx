import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const Resume = () => {
  return (
    <Card
    id="resume"
      className="resumePage"
      sx={{
        padding: { xs: 3, sm: 5, md: 7, lg: 9, xl: 12 },
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <h1 style={{ color: "white" }}>Resume</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <h2>EDUCATION</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <h2 style={{ fontSize: 18, fontFamily: "cursive" }}>
              Bachelor's Degree, Electrical *December 2020
            </h2>

            <span>Graduated with Higher Second Class Honours</span>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <h2>WORK </h2>
            <h2>EXPERIENCE</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <h2 style={{ fontSize: 18, fontFamily: "cursive" }}>
              PickupBiz Software Pvt. Ltd, Pune
            </h2>
            <p style={{ color: "whitesmoke" }}>Nov 2021 - Present</p>

            <span>
              <ul type="none">
                <li>Implemented responsive and visually appealing user interfaces
              using HTML, CSS, and Material UI, ensuring a seamless user
              experience across devices.</li>
              <li> Developed reusable UI components using
              React.js, enhancing the overall user experience.</li>
              <li>
              Utilized JavaScript to create interactive elements and improve user
              engagement.
              </li>
              <li> Collaborated with cross-functional teams to streamline
              the front-end development process and optimize code efficiency.
              </li>
              <li>
              Contributed significantly to knowledge management and continually
              enhanced skillsets.
              </li>
              </ul>
               
              
              
            </span>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <h2>PROJECTS</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <h2>FeesCollector </h2>
            <p style={{ fontSize: 16, fontFamily: "cursive",color:"whitesmoke" }}>
              Using HTML, CSS, JavaScript, React Js, Redux, Material Ui, Node
              Js, MangoDB
            </p>
            <span>
              As the Frontend Developer for the Fees Collector Management
              System, I played a pivotal role in architecting and implementing
              the user interface. Leveraging the MERN stack and Razorpay
              integration, the project aimed to streamline fee collection,
              transaction handling, and batch allocation for students.
              Implemented enhanced security measures by transforming sensitive
              user data like passwords and mobile numbers into encrypted
              symbols. Implemented secure authentication and authorization
              mechanisms using industry-standard practices to ensure data
              privacy and access control. Employed JWT (JSON Web Tokens) for
              secure user authentication.
            </span>
            <h2>StreetVendor </h2>
            <p style={{ fontSize: 16, fontFamily: "cursive",color:"whitesmoke" }}>
              Using HTML, CSS, JavaScript, React Js, Redux, Material Ui, Node
              Js, MangoDB
            </p>
            <span>
              This system aimed to streamline and digitize the management of
              roadside vendors, primarily focusing on tracking their locations,
              payment statuses, and registration details. Implemented secure
              authentication and authorization mechanisms using
              industry-standard practices to ensure data privacy and access
              control. Employed JWT (JSON Web Tokens) for secure user
              authentication.
            </span>

            <h2>Portfolio Website Design</h2>
            <p style={{  fontSize: 16, fontFamily: "cursive",color:"whitesmoke" }}>
              Using HTML, CSS, Javascript, React Js, Redux, Material Ui,Mongo
              DB, Node Js
            </p>
            <span>
              After Developing my skills on Web Development I made a Portfolio
              Website Design which is completely based on Full Stack.
            </span>

            <h2>Commercial Website</h2>
            <p style={{  fontSize: 16, fontFamily: "cursive",color:"whitesmoke" }}>
              Using HTML, CSS, Javascript, React Js, Redux, Material Ui, Mongo
              DB
            </p>
            <span>
              An e-commerce should aim at providing an immersive and unique
              experience that makes online shopping a much simpler and seamless
              process. At the same time, it should include features that drive
              sales and boost revenues for your business{" "}
            </span>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <h2>SKILLS</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <h2 style={{ fontSize: 20, fontFamily: "cursive" }}>
              My Programming Language Proficiency
            </h2>
            <h3>HTML5</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={85}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>CSS3</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={65}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>JAVASCRIPT</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={60}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>REACT JS</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={80}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>REDUX</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={55}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>Material UI</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={78}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>MONGO DB</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={60}
                sx={{ height: 20 }}
              />
            </Box>
            <h3>Node JS</h3>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                color="inherit"
                value={50}
                sx={{ height: 20 }}
              />
            </Box>{" "}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

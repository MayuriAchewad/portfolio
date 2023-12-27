import { Grid, Avatar, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { FaDownload } from "react-icons/fa";

export const About = () => {
  return (
    <Card
      sx={{
        padding: { xs: 4, sm: 4, md: 6, lg: 8, xl: 10 },
        height: "100%",
      }}
      className="aboutpage"
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Avatar
              sx={{
                width: { xs: 100, sm: 150, md: 200, lg: 250, xl: 300 },
                height: { xs: 100, sm: 150, md: 200, lg: 250, xl: 300 },
                boxShadow:"0px 1px 10px 10px black"
              }}
              src="/bg/profile.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <h2 style={{ color: "white" }}>About Me</h2>
            <p style={{ color: "grey" }}>
              Hi there ! I am Mayuri ! You might also know me as Frontend Web
              Developer. I've been coding for over 2+ Years now. As of now I'am
              willing and excited to work with both startups and large
              corporations to build & scale their companies. Along the journey I
              realised my passion existed in helping and pursue my dreams as
              upcoming developers. With this passion, as of now I have done some
              projects related to HTML5, CSS3, Javascript and Reactjs, Nodejs,
              MongoDB, Redux. I will deliver REAL VALUE by giving my best to the
              projects and solves the problems that will help me to enter the
              world of web development.
            </p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid
            sx={{ color: "white" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
          >
            <p>Here are a few technologies I've been working with recently:</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <ul style={{ color: "grey", marginLeft: 15 }}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript(ES6)</li>
              <li>React JS</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <ul style={{ color: "grey", marginLeft: 15 }}>
              <li>Material UI</li>
              <li>BootStrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <h2 style={{ color: "white" }}>Contact Details</h2>
            <p style={{ color: "grey" }}>Mayuri Achewad</p>
            <p style={{ color: "grey" }}>Nanded, Maharashtra, 431602</p>
            <p style={{ color: "grey" }}>+91 9699813523</p>
            <p style={{ color: "grey" }}>Nanded, Maharashtra, 431602</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Button
              className="download"
              fullWidth
              variant="contained"
              color="inherit"
            >
              <a href="/assets/MyResume.pdf">
                <FaDownload />
                Download resume
              </a>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

import { Avatar, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ContactsCopy } from "./ContactsCopy";

export const Home = () => {
  return (
    <Card
      align="center"
      className="homepage"
      sx={{
        bgcolor: "skyblue",
        padding: { xs: 10, sm: 16, md: 18, lg: 20, xl: 22 },
        
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ display: "flex", justifyContent: "center" }}
            className="intro"
          >
            <h1>I'm Mayuri Achewad</h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              marginTop: "-20px",
              fontSize: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="myself">
              Live in Nanded, Maharashtra.{" "}
              <span style={{ fontWeight: "bold" }}>I am a WEB DEVELOPER.</span>
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <a href="https://twitter.com/MR65882853">
              <TwitterIcon
                style={{
                  marginLeft: 30,
                  marginTop: "-10px",
                  borderRadius: "100%",
                  fontWeight: "lighter",
                  height: 30,
                  width: 32,
                  color: "black",
                }}
              />
            </a>

            <a href="https://www.linkedin.com/in/mayuri-achewad-2b0826259/">
              <LinkedInIcon
                style={{
                  marginLeft: 30,
                  marginTop: "-10px",
                  borderRadius: "100%",
                  fontWeight: "lighter",
                  height: 30,
                  width: 32,
                  color: "black",
                }}
              />
            </a>
            <a href="http://www.instagram.com/mayuriachewad">
              <InstagramIcon
                style={{
                  marginLeft: 30,
                  marginTop: "-10px",
                  borderRadius: "100%",
                  fontWeight: "lighter",
                  height: 30,
                  width: 32,
                  color: "black",
                }}
              />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fmayuri.achewad%2F&ext=1685969857&hash=AeZyxMLvtl4fZjzl30s">
              <FacebookIcon
                style={{
                  marginLeft: 30,
                  marginTop: "-10px",
                  borderRadius: "100%",
                  fontWeight: "lighter",
                  height: 30,
                  width: 32,
                  color: "black",
                }}
              />
            </a>
            <a href="https://github.com/MayuriAchewad">
              <GitHubIcon
                style={{
                  marginLeft: 30,
                  marginTop: "-10px",
                  borderRadius: "100%",
                  fontWeight: "lighter",
                  height: 30,
                  width: 32,
                  color: "black",
                }}
              />
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

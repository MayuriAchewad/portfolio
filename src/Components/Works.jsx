import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const Works = () => {
  const data = [
    {
      img: "./images/Todo.png",
      info:
        "ToDo list with crud operation by using different technologies like HTML5, CSS3, React JS, Material UI",
      heading: "ToDo List",
      url: "https://todolistwithcrud.netlify.app/",
    },
    {
      img: "./images/Validation.png",
      info:
        "Create Login and registration form with formik and yup method using React JS , material UI, HTML, CSS",
      heading: "Validation Form",
      url: "https://formwithyupandformik.netlify.app/",
    },
  ];
  return (
    <Card
      align="center"
      className="workPage"
      sx={{
        padding: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },
        height: "100%",
        color: "white",
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>CHECK OUTS SOME OF MY WORKS.</h1>
          </Grid>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <div className="wrapper">
                <div className="card">
                  <img src={item.img} alt="" />
                  <div className="info">
                    <h1>{item.heading}</h1>
                    <p>{item.info}</p>
                    <br />
                    <a href={item.url} className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

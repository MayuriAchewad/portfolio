import { Grid } from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";

export const QRMain = () => {
    return(
        <Grid container spacing={2} align="center" sx={{ marginTop:"100px"}}>
            <Grid item xs={12}>
               <QRCode size={200} bgColor="white" fgColor="black" value="Subscribe to WebStylePress" /> 
            </Grid>
        </Grid>
    )
}
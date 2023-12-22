
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Works } from "./Works";
import { AboutCopy } from "./AboutCopy";
import { HomeCopy } from "./HomeCopy";
import { ResumeCopy } from "./ResumeCopy";
import { ContactsCopy } from "./ContactsCopy";
import { NavCopy } from "./NavCopy";
import { Form } from '../Projects/Form/Form';
import { Nav } from './Nav';
import { Testimonials } from './Testimonials';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div >
        <BrowserRouter>
    {/* <Nav/> */}
          <Button
          sx={{position:"absolute" , top:10,right:10}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
          
          <MenuItem sx={{bgcolor:"black",color:"white", width:150, position:"relative", top:10,textDecoration:"none"}} onClick={handleClose}><NavCopy/></MenuItem>
         
      </Menu>
        
        <Routes>
            <Route path="/" element={<Testimonials/>} />
            <Route path="/home" element={<HomeCopy/>} />
            <Route path="/about" element={<AboutCopy/>} />
            <Route path="/resume" element={<ResumeCopy/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contacts" element={<ContactsCopy/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
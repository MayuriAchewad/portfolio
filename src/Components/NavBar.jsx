import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import { navList } from "./NavList";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" sx={{bgcolor:"#000033",color:"whitesmoke"}}>
      <Toolbar>
        {/* <IconButton
          sx={{ display: { xs: "none", md: "flex" } }}
          size="large"
          edge="start"
          color="inherit"
          area-aria-label="logo"
        >
          <LocalLibraryIcon />
        </IconButton> */}
        <Typography
        fontStyle="italic"
          variant="h6"
          fontFamily="cursive"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          Time To Program
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {navList.map((item) => (
            <Link to={item.path}>
              <Button sx={{color:"whitesmoke",margin:"5px 25px"}}>{item.title}</Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            sx={{ display: { xs: "flex", md: "none" } }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuList sx={{bgcolor:"navy"}}>
              {navList.map((item) => (
                <Link to={item.path}>
                  <MenuItem onClick={closeMenu} sx={{color:"whitesmoke"}}>
                    <Button>{item.title}</Button>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
          {/* <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            size="large"
            edge="start"
            color="inherit"
            area-aria-label="logo"
          >
            <LocalLibraryIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            My Portfolio
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

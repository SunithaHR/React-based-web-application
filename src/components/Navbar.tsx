import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
  "&.active": {
    fontWeight: "bold",
    borderBottom: "2px solid white",
  },
});

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        <Button color="inherit" component={StyledNavLink} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={StyledNavLink} to="/counter">
          Counter
        </Button>
        <Button color="inherit" component={StyledNavLink} to="/form">
          User Form
        </Button>
        <Button color="inherit" component={StyledNavLink} to="/editor">
          Rich Text Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

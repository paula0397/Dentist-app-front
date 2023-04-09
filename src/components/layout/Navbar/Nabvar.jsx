import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  

  return (
    <div>
      <nav style={{ width: "100%", padding: "0", margin: "0" }} className={state.darkMode ? "dark" : ""}>
        <AppBar
          sx={{ background: "#a8dadc", color: state.ftColor }}
          position="static"
        >
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "#1d3557" },
              }}
            >
              <span style={{ color: "red" }}>D</span>H ODONTO
            </Typography>
            <div style={{ display: "flex" }}>
              <Link
                to="/dentists"
                style={{
                  color: "#1d3557",
                  margin: "0px 30px",
                  textDecoration: "none",
                  fontFamily: "Raleway",
                }}
              >
                <strong>Home</strong>
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "#1d3557",
                  margin: "0px 30px",
                  textDecoration: "none",
                  fontFamily: "Raleway",
                }}
              >
                <strong>Contact</strong>
              </Link>
              <Link
                to="/favs"
                style={{
                  color: "#1d3557",
                  margin: "0px 30px",
                  textDecoration: "none",
                  fontFamily: "Raleway",
                }}
              >
                <strong>Favs</strong>
              </Link>
            </div>
{             <Switch {...label} defaultChecked color="primary" onClick={()=>dispatch({type:"DARK_MODE"})}/>
}          </Toolbar>
        </AppBar>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
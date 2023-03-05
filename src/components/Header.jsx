import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Drawercomp from "./Drawercomp";

const Navitems = ["Home" , "About" , "Contact Us" ,"Features"];

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "gray" }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {isMatch ? (
              <>
                <Grid item>
                  <Drawercomp />
                </Grid>
                <Grid item>
                  <Typography>My First Kick 2</Typography>
                </Grid>
                <Grid item>
                  <SportsSoccerIcon />
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <Typography>My First Kick</Typography>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item>
                  <Tabs
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="secondary"
                  >
                    {Navitems.map((navitem, index) => (
                      <Tab key={index} label={navitem} />
                    ))}
                  </Tabs>
                </Grid>
                <Grid item>
                  <Button variant="contained">Login</Button>
                  <Button sx={{ marginLeft: "10px" }} variant="contained">
                    Signup
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

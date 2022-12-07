import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export enum NavTabs {
  UserSearch = "btn-user-search",
  About = "btn-about",
  Contact = "btn-contact",
}

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedTab(e.currentTarget.id);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container>
            <Grid item md={8} xs={12}>
              <Box
                sx={{
                  paddingTop: ".7rem",
                  flexGrow: 1,
                  display: { md: "flex" },
                }}
              >
                <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  GITHUB USER SEARCH
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    Powered by YND
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
                <Button
                  id={NavTabs.UserSearch}
                  onClick={handleTabSelect}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant={
                    selectedTab === NavTabs.UserSearch || selectedTab === ""
                      ? "contained"
                      : "text"
                  }
                >
                  USER SEARCH
                </Button>
                <Button
                  id={NavTabs.About}
                  onClick={handleTabSelect}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant={selectedTab === NavTabs.About ? "contained" : "text"}
                >
                  ABOUT
                </Button>
                <Button
                  id={NavTabs.Contact}
                  onClick={handleTabSelect}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant={
                    selectedTab === NavTabs.Contact ? "contained" : "text"
                  }
                >
                  CONTACT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
